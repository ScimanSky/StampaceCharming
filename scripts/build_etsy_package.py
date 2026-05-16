#!/usr/bin/env python3

from __future__ import annotations

import json
import shutil
import textwrap
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist-etsy"
SELLER = ROOT / "seller-assets"
LISTING_DIR = SELLER / "listing-slides"
SOCIAL_DIR = SELLER / "social-crops"
PACKAGE_NAME = "staybook-digital-guest-book-template"
PACKAGE_DIR = DIST / PACKAGE_NAME
PACKAGE_ZIP = DIST / f"{PACKAGE_NAME}.zip"

FILES_TO_COPY = [
    "index.html",
    "app.js",
    "icons.js",
    "template-utils.js",
    "styles.css",
    "favicon.svg",
    "config.json",
    "customize.html",
    "customize.js",
    "customize.css",
    "README.md",
    "QUICK_START.md",
    "CUSTOMIZATION_GUIDE.md",
    "DEPLOY_GUIDE.md",
    "LICENSE.txt",
]

DIRS_TO_COPY = [
    "printables",
    "vendor",
]

SLIDE_SIZE = (2000, 1600)
SQUARE_SIZE = (1600, 1600)
FONT_SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
FONT_SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"

THEME = {
    "bg": "#f6efe4",
    "bg_alt": "#eadcc7",
    "paper": "#fff9f2",
    "ink": "#241d19",
    "muted": "#65574b",
    "accent": "#a75c43",
    "accent_alt": "#5d6d4c",
    "soft": "#efddcf",
    "line": "#d8c7b7",
}


def load_json(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def ensure_clean_dirs() -> None:
    DIST.mkdir(exist_ok=True)
    SELLER.mkdir(exist_ok=True)
    if LISTING_DIR.exists():
        shutil.rmtree(LISTING_DIR)
    if SOCIAL_DIR.exists():
        shutil.rmtree(SOCIAL_DIR)
    if PACKAGE_DIR.exists():
        shutil.rmtree(PACKAGE_DIR)
    if PACKAGE_ZIP.exists():
        PACKAGE_ZIP.unlink()

    LISTING_DIR.mkdir(parents=True, exist_ok=True)
    SOCIAL_DIR.mkdir(parents=True, exist_ok=True)
    PACKAGE_DIR.mkdir(parents=True, exist_ok=True)


def copy_package_files() -> None:
    for name in FILES_TO_COPY:
        source = ROOT / name
        target = PACKAGE_DIR / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)

    for directory in DIRS_TO_COPY:
        source = ROOT / directory
        target = PACKAGE_DIR / directory
        if target.exists():
            shutil.rmtree(target)
        shutil.copytree(source, target)


def zip_package() -> None:
    with zipfile.ZipFile(PACKAGE_ZIP, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for path in PACKAGE_DIR.rglob("*"):
            archive.write(path, arcname=path.relative_to(PACKAGE_DIR.parent))


def rounded(draw: ImageDraw.ImageDraw, box, radius: int, fill, outline=None, width: int = 1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def gradient(size, top_color: str, bottom_color: str):
    image = Image.new("RGB", size, top_color)
    draw = ImageDraw.Draw(image)
    width, height = size
    top = tuple(int(top_color[i : i + 2], 16) for i in (1, 3, 5))
    bottom = tuple(int(bottom_color[i : i + 2], 16) for i in (1, 3, 5))
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] + (bottom[i] - top[i]) * ratio) for i in range(3))
        draw.line((0, y, width, y), fill=color)
    return image.convert("RGBA")


def draw_wrapped(draw: ImageDraw.ImageDraw, text: str, xy, width: int, font_obj, fill, spacing: int = 10):
    chars_per_line = max(14, int(width / max(font_obj.size * 0.62, 10)))
    wrapped = textwrap.fill(text, width=chars_per_line)
    draw.multiline_text(xy, wrapped, font=font_obj, fill=fill, spacing=spacing)


def new_slide() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = gradient(SLIDE_SIZE, THEME["bg"], THEME["bg_alt"])
    draw = ImageDraw.Draw(image)
    rounded(draw, (60, 60, 1940, 1540), 42, fill=THEME["paper"])
    return image, draw


def draw_header(draw: ImageDraw.ImageDraw, title: str, subtitle: str):
    draw.text((118, 118), "StayBook", fill=THEME["accent"], font=font(FONT_SANS_BOLD, 24))
    draw.text((118, 165), title, fill=THEME["ink"], font=font(FONT_SERIF_BOLD, 78))
    draw_wrapped(draw, subtitle, (118, 282), 760, font(FONT_SANS, 30), THEME["muted"], spacing=14)


def draw_phone(draw: ImageDraw.ImageDraw, config: dict):
    rounded(draw, (1035, 155, 1535, 1425), 70, fill="#14110f")
    rounded(draw, (1060, 205, 1510, 1396), 56, fill=THEME["bg"])
    rounded(draw, (1204, 220, 1398, 252), 14, fill="#14110f")
    rounded(draw, (1092, 288, 1478, 640), 36, fill=THEME["paper"], outline=THEME["line"])
    draw.text((1126, 324), config["property"]["badge"], fill=THEME["accent"], font=font(FONT_SANS_BOLD, 18))
    draw_wrapped(draw, config["property"]["name"], (1126, 360), 300, font(FONT_SERIF_BOLD, 42), THEME["ink"], spacing=8)
    draw_wrapped(draw, config["content"]["en"]["intro"], (1126, 490), 312, font(FONT_SANS, 18), THEME["muted"], spacing=6)
    chips = [("Wi-Fi", 706), ("House rules", 820), ("Check-in", 934), ("Help", 1048)]
    for label, y in chips:
        rounded(draw, (1100, y, 1450, y + 84), 24, fill="#ffffff", outline=THEME["line"])
        draw.text((1132, y + 26), label, fill=THEME["ink"], font=font(FONT_SANS_BOLD, 22))


def draw_feature_stack(draw: ImageDraw.ImageDraw, items: list[tuple[str, str]], x: int = 118, start_y: int = 500):
    for index, (title, copy) in enumerate(items):
        y = start_y + index * 182
        rounded(draw, (x, y, 790, y + 148), 30, fill=THEME["soft"], outline=THEME["line"])
        draw.text((150, y + 26), title, fill=THEME["ink"], font=font(FONT_SERIF_BOLD, 34))
        draw_wrapped(draw, copy, (150, y + 76), 560, font(FONT_SANS, 22), THEME["muted"], spacing=8)


def draw_checklist(draw: ImageDraw.ImageDraw, title: str, items: list[str], x: int = 915, y: int = 220):
    draw.text((x, y), title, fill=THEME["ink"], font=font(FONT_SERIF_BOLD, 44))
    cursor = y + 90
    for item in items:
        draw.ellipse((x, cursor + 7, x + 18, cursor + 25), fill=THEME["accent_alt"])
        draw_wrapped(draw, item, (x + 36, cursor), 800, font(FONT_SANS, 24), THEME["muted"], spacing=8)
        cursor += 114


def draw_language_badges(draw: ImageDraw.ImageDraw, labels: list[str]):
    x = 920
    y = 900
    for label in labels:
        rounded(draw, (x, y, x + 142, y + 68), 24, fill="#ffffff", outline=THEME["line"])
        draw.text((x + 71, y + 34), label, fill=THEME["ink"], font=font(FONT_SANS_BOLD, 22), anchor="mm")
        x += 164


def draw_printables(draw: ImageDraw.ImageDraw):
    blocks = [
        ("QR sign", "Entrance sign with guest-safe QR code"),
        ("Wi-Fi card", "Compact printable Wi-Fi card with QR"),
        ("Welcome sheet", "One-page intro for the room or desk"),
        ("Pocket card", "Small cut-out card for guests on the move"),
    ]
    start_x = 920
    for index, (title, copy) in enumerate(blocks):
        x = start_x + index * 238
        rounded(draw, (x, 430, x + 214, 1180), 28, fill="#ffffff", outline=THEME["line"])
        rounded(draw, (x + 24, 468, x + 190, 670), 20, fill=THEME["soft"], outline=THEME["line"])
        draw.text((x + 24, 716), title, fill=THEME["ink"], font=font(FONT_SERIF_BOLD, 28))
        draw_wrapped(draw, copy, (x + 24, 768), 160, font(FONT_SANS, 18), THEME["muted"], spacing=6)


def slide_cover(config: dict) -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "A digital guest book that feels easier than Canva and more useful than a PDF.",
        "Built for hosts who need a clean guest-facing page with house rules, Wi-Fi, check-in details and local tips.",
    )
    draw_feature_stack(
        draw,
        [
            ("Five guest languages", "English, Italian, French, German and Spanish are already included."),
            ("Simple editing flow", "The buyer updates one config file through a browser customizer, no code needed for normal edits."),
            ("QR-ready extras", "The bundle includes matching printables for QR sharing, Wi-Fi access and welcome signage."),
        ],
    )
    draw_phone(draw, config)
    return image


def slide_languages() -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "The multilingual part is already done.",
        "This matters on Etsy because buyers do not want to build five language versions from scratch.",
    )
    draw_feature_stack(
        draw,
        [
            ("5 tabs inside the customizer", "Edit one language at a time without touching the layout."),
            ("Fixed guest-book structure", "Each language keeps the same clean sections: rules, useful info, check-in, check-out, local tips and emergency help."),
            ("Less confusion for hosts", "The buyer never needs to decide how many pages or modules the guide should have."),
        ],
    )
    draw_checklist(
        draw,
        "Languages included",
        [
            "English",
            "Italiano",
            "Francais",
            "Deutsch",
            "Espanol",
        ],
    )
    draw_language_badges(draw, ["EN", "IT", "FR", "DE", "ES"])
    return image


def slide_guest_book_structure() -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "Exactly the sections guests expect",
        "The product is no longer a loose website template. It is a fixed digital guest book with the right hospitality sections.",
    )
    draw_feature_stack(
        draw,
        [
            ("House rules", "Noise, smoking, keys and the practical rules guests always ask about."),
            ("Useful info", "Hot water, trash, entry instructions and small stay notes."),
            ("Check-in and check-out", "Arrival timing, late arrival notes and departure reminders."),
            ("Local tips and help", "Nearby essentials plus emergency or urgent support info."),
        ],
        start_y=420,
    )
    draw_checklist(
        draw,
        "Guest-facing essentials",
        [
            "Wi-Fi network and password",
            "House rules",
            "Check-in notes",
            "Check-out notes",
            "Useful stay info",
            "Local recommendations",
            "Emergency contacts",
        ],
    )
    return image


def slide_editing_flow() -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "Editing stays simple on purpose.",
        "The product is meant for hosts, not designers. The customizer only exposes the fields that matter.",
    )
    draw_feature_stack(
        draw,
        [
            ("Step 1", "Fill in the property name, address, check-in times and optional hero image."),
            ("Step 2", "Add host contact details and Wi-Fi."),
            ("Step 3", "Review the 5 language tabs and paste the final live URL."),
        ],
    )
    draw_checklist(
        draw,
        "Buyer flow",
        [
            "Open customize.html",
            "Edit essentials",
            "Review each language tab",
            "Preview the guide and printables",
            "Download config.json",
            "Publish and share the final guest link",
        ],
    )
    return image


def slide_printables() -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "Printables that make the bundle feel complete",
        "The guest book works as a link, but the QR files increase perceived value and make the product more practical for real hosting.",
    )
    draw_feature_stack(
        draw,
        [
            ("QR sign", "Use it at the entrance, on the desk or in the kitchen."),
            ("Wi-Fi card", "Small card for the room, hallway or bedside table."),
            ("Welcome sheet", "Quick one-page intro for the first impression."),
        ],
        start_y=470,
    )
    draw_printables(draw)
    return image


def slide_delivery() -> Image.Image:
    image, draw = new_slide()
    draw_header(
        draw,
        "Be explicit about delivery, hosting and license",
        "Clear expectations reduce support questions and make the listing feel more trustworthy.",
    )
    draw_feature_stack(
        draw,
        [
            ("Digital product only", "No physical item ships. Buyers receive a ZIP download."),
            ("Hosting not included", "The buyer publishes the files on GitHub Pages or another static host."),
            ("One file to update", "Normal customization happens inside config.json."),
        ],
    )
    draw_checklist(
        draw,
        "What to mention in the listing",
        [
            "Digital download only",
            "No coding needed for basic edits",
            "5 guest languages included",
            "Printables included",
            "Hosting not included",
            "One business / one client license",
        ],
    )
    return image


def save_square_crop(source: Image.Image, output_name: str) -> None:
    width, height = source.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    crop = source.crop((left, top, left + side, top + side)).resize(SQUARE_SIZE)
    crop.save(SOCIAL_DIR / output_name)


def generate_listing_slides(config: dict) -> None:
    slides = [
        ("01-cover.png", slide_cover(config)),
        ("02-five-languages.png", slide_languages()),
        ("03-guest-book-structure.png", slide_guest_book_structure()),
        ("04-easy-editing.png", slide_editing_flow()),
        ("05-printables.png", slide_printables()),
        ("06-delivery-license.png", slide_delivery()),
    ]

    for filename, image in slides:
        image.save(LISTING_DIR / filename)

    save_square_crop(slides[0][1], "square-cover.png")
    save_square_crop(slides[4][1], "square-printables.png")
    save_square_crop(slides[1][1], "square-five-languages.png")


def write_seller_note() -> None:
    note = textwrap.dedent(
        f"""
        StayBook seller bundle created successfully.

        Package:
          - {PACKAGE_ZIP}

        Slides:
          - {LISTING_DIR}

        Social crops:
          - {SOCIAL_DIR}

        Buyer bundle contents:
          - static guest book website
          - browser customizer
          - 5 language config
          - QR sign, Wi-Fi card, welcome sheet and pocket QR card
          - deploy guide and buyer docs
        """
    ).strip()
    (DIST / "SELLER_READY_CHECKLIST.txt").write_text(note + "\n", encoding="utf-8")


def main() -> None:
    ensure_clean_dirs()
    copy_package_files()
    zip_package()
    generate_listing_slides(load_json(ROOT / "config.json"))
    write_seller_note()
    print(f"Created {PACKAGE_ZIP}")


if __name__ == "__main__":
    main()

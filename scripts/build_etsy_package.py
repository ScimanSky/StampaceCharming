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
PACKAGE_NAME = "guest-guide-atelier-template"
PACKAGE_DIR = DIST / PACKAGE_NAME
PACKAGE_ZIP = DIST / f"{PACKAGE_NAME}.zip"

FILES_TO_COPY = [
    "index.html",
    "app.js",
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
    "data/presets",
    "printables",
    "vendor",
]

SLIDE_SIZE = (2000, 1600)
SQUARE_SIZE = (1600, 1600)
FONT_SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
FONT_SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"


THEMES = {
    "mediterranean": {
        "bg": "#f8efe3",
        "bg_alt": "#ecdbc6",
        "paper": "#fff8f1",
        "ink": "#271f19",
        "muted": "#625247",
        "accent": "#b86f46",
        "accent_alt": "#2d5142",
        "line": "#dbc6b2",
        "soft": "#ead4bf",
    },
    "gallery": {
        "bg": "#f3f0eb",
        "bg_alt": "#ddd7cf",
        "paper": "#ffffff",
        "ink": "#171818",
        "muted": "#5a5e60",
        "accent": "#1f3c63",
        "accent_alt": "#8f5e31",
        "line": "#d6d1c9",
        "soft": "#e3eaf3",
    },
    "coastal": {
        "bg": "#eef6f5",
        "bg_alt": "#d6e7e4",
        "paper": "#fcffff",
        "ink": "#163031",
        "muted": "#4a6966",
        "accent": "#1e7474",
        "accent_alt": "#c67f53",
        "line": "#c8dedb",
        "soft": "#d9eeeb",
    },
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

    LISTING_DIR.mkdir(parents=True, exist_ok=True)
    SOCIAL_DIR.mkdir(parents=True, exist_ok=True)

    if PACKAGE_DIR.exists():
        shutil.rmtree(PACKAGE_DIR)

    if PACKAGE_ZIP.exists():
        PACKAGE_ZIP.unlink()


def copy_package_files() -> None:
    PACKAGE_DIR.mkdir(parents=True, exist_ok=True)

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


def vertical_gradient(size, top_color: str, bottom_color: str):
    image = Image.new("RGB", size, top_color)
    draw = ImageDraw.Draw(image)
    width, height = size
    top = tuple(int(top_color[i : i + 2], 16) for i in (1, 3, 5))
    bottom = tuple(int(bottom_color[i : i + 2], 16) for i in (1, 3, 5))
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] + (bottom[i] - top[i]) * ratio) for i in range(3))
        draw.line((0, y, width, y), fill=color)
    return image


def draw_wrapped(draw: ImageDraw.ImageDraw, text: str, xy, width: int, font_obj, fill, spacing: int = 10):
    chars_per_line = max(16, int(width / max(font_obj.size * 0.62, 10)))
    wrapped = textwrap.fill(text, width=chars_per_line)
    draw.multiline_text(xy, wrapped, font=font_obj, fill=fill, spacing=spacing)


def new_slide(theme: dict) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = vertical_gradient(SLIDE_SIZE, theme["bg"], theme["bg_alt"]).convert("RGBA")
    draw = ImageDraw.Draw(image)
    return image, draw


def slide_shell(draw: ImageDraw.ImageDraw, theme: dict):
    rounded(draw, (56, 56, 1944, 1544), 42, fill=theme["paper"])
    rounded(draw, (96, 96, 812, 1464), 34, fill="#ffffff", outline=theme["line"], width=2)
    rounded(draw, (844, 96, 1904, 1464), 34, fill="#ffffff", outline=theme["line"], width=2)


def draw_header(draw: ImageDraw.ImageDraw, title: str, subtitle: str, theme: dict):
    draw.text((120, 120), "Guest Guide Atelier", fill=theme["accent"], font=font(FONT_SANS_BOLD, 24))
    draw.text((120, 165), title, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 76))
    draw_wrapped(draw, subtitle, (120, 275), 740, font(FONT_SANS, 30), theme["muted"], spacing=14)


def draw_phone_mock(draw: ImageDraw.ImageDraw, theme: dict, config: dict):
    rounded(draw, (960, 170, 1500, 1370), 66, fill="#101010")
    rounded(draw, (986, 222, 1474, 1342), 54, fill=theme["bg"], outline="#1a1a1a", width=2)
    rounded(draw, (1130, 238, 1330, 270), 14, fill="#101010")

    rounded(draw, (1020, 308, 1440, 690), 34, fill=theme["paper"], outline=theme["line"])
    draw.ellipse((1056, 340, 1144, 428), fill=theme["accent"])
    draw.text((1100, 385), config["brand"]["crest"], fill="#fff8f1", font=font(FONT_SERIF_BOLD, 34), anchor="mm")
    draw.text((1176, 344), "QR-ready guest guide", fill=theme["accent"], font=font(FONT_SANS_BOLD, 18))
    draw_wrapped(draw, config["brand"]["headline"]["en"], (1058, 454), 350, font(FONT_SERIF_BOLD, 34), theme["ink"], spacing=8)
    draw_wrapped(
        draw,
        "Wi-Fi, arrival, local picks and direct host contact in one mobile page.",
        (1058, 582),
        330,
        font(FONT_SANS, 18),
        theme["muted"],
        spacing=7,
    )

    y = 742
    cards = [
        ("Wi-Fi", "Copy password or connect quickly"),
        ("Arrival", "Self check-in, route and timing notes"),
        ("Local picks", "Maps, food and nearby essentials"),
        ("Host", "One-tap call or WhatsApp support"),
    ]
    for index, (label, copy) in enumerate(cards):
        x = 1020 + (index % 2) * 214
        row_y = y + (index // 2) * 174
        rounded(draw, (x, row_y, x + 194, row_y + 150), 24, fill="#ffffff", outline=theme["line"])
        draw.text((x + 18, row_y + 20), label, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 24))
        draw_wrapped(draw, copy, (x + 18, row_y + 62), 158, font(FONT_SANS, 16), theme["muted"], spacing=6)


def draw_feature_cards(draw: ImageDraw.ImageDraw, theme: dict, items: list[tuple[str, str]], start_y: int = 470):
    for index, (title, copy) in enumerate(items):
        x = 126
        y = start_y + index * 170
        rounded(draw, (x, y, 740, y + 138), 28, fill=theme["soft"], outline=theme["line"])
        draw.text((158, y + 24), title, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 32))
        draw_wrapped(draw, copy, (158, y + 68), 520, font(FONT_SANS, 22), theme["muted"], spacing=8)


def draw_checklist(draw: ImageDraw.ImageDraw, theme: dict, title: str, items: list[str], x: int = 874, y: int = 220):
    draw.text((x, y), title, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 44))
    line_y = y + 88
    for item in items:
        draw.ellipse((x, line_y + 6, x + 18, line_y + 24), fill=theme["accent"])
        draw_wrapped(draw, item, (x + 38, line_y), 820, font(FONT_SANS, 24), theme["muted"], spacing=8)
        line_y += 118


def draw_steps(draw: ImageDraw.ImageDraw, theme: dict, title: str, steps: list[str], x: int = 874, y: int = 220):
    draw.text((x, y), title, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 44))
    step_y = y + 96
    for index, item in enumerate(steps, start=1):
        rounded(draw, (x, step_y, 1760, step_y + 124), 26, fill=theme["soft"], outline=theme["line"])
        draw.ellipse((x + 24, step_y + 26, x + 96, step_y + 98), fill=theme["accent"])
        draw.text((x + 60, step_y + 62), str(index), fill="#fff8f1", font=font(FONT_SANS_BOLD, 28), anchor="mm")
        draw_wrapped(draw, item, (x + 126, step_y + 26), 580, font(FONT_SANS, 24), theme["ink"], spacing=8)
        step_y += 148


def draw_preset_comparison(draw: ImageDraw.ImageDraw, theme: dict, presets: list[tuple[str, str, str]]):
    x_positions = [900, 1230, 1560, 1890]
    card_width = 280
    for (name, mood, accent), x in zip(presets, x_positions):
        rounded(draw, (x - card_width, 300, x, 1230), 34, fill="#ffffff", outline=theme["line"])
        draw.ellipse((x - card_width + 34, 336, x - card_width + 118, 420), fill=accent)
        draw.text((x - card_width + 76, 378), name[:2].upper(), fill="#fff8f1", font=font(FONT_SERIF_BOLD, 28), anchor="mm")
        draw.text((x - card_width + 34, 460), name, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 32))
        draw_wrapped(draw, mood, (x - card_width + 34, 516), 212, font(FONT_SANS, 21), theme["muted"], spacing=8)
        rounded(draw, (x - card_width + 34, 900, x - 34, 1050), 26, fill=theme["soft"], outline=theme["line"])
        draw.text((x - card_width + 54, 930), "Best for", fill=theme["accent"], font=font(FONT_SANS_BOLD, 18))
        draw_wrapped(draw, mood, (x - card_width + 54, 968), 190, font(FONT_SANS, 18), theme["ink"], spacing=6)


def draw_printable_strip(draw: ImageDraw.ImageDraw, theme: dict):
    blocks = [
        (910, "QR Sign", "A4 / US Letter sign for a guest-facing QR code"),
        (1235, "Wi-Fi Card", "Compact printable card with live Wi-Fi QR"),
        (1560, "Welcome Sheet", "Entrance-ready sheet with host info and guide QR"),
    ]
    for x, title, copy in blocks:
        rounded(draw, (x, 360, x + 260, 1160), 34, fill="#ffffff", outline=theme["line"])
        rounded(draw, (x + 26, 398, x + 234, 690), 24, fill=theme["soft"], outline=theme["line"])
        draw.ellipse((x + 76, 448, x + 184, 556), fill=theme["accent"])
        rounded(draw, (x + 78, 584, x + 182, 688), 16, fill="#ffffff", outline=theme["line"])
        draw.text((x + 32, 736), title, fill=theme["ink"], font=font(FONT_SERIF_BOLD, 28))
        draw_wrapped(draw, copy, (x + 32, 790), 196, font(FONT_SANS, 20), theme["muted"], spacing=7)


def slide_cover(config: dict, theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "A premium guest guide that is easier than a full website and stronger than a PDF.",
        "Sell it as a QR-ready hospitality mini web app for Airbnb hosts, vacation rentals and boutique stays.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("No-code customizer", "Basic edits happen in the browser. Buyers only replace one config file."),
            ("Mobile-first guide", "Optimized for guest phones, pre-arrival links and in-home QR scanning."),
            ("Premium bundle", "Includes website template, presets, deploy docs and practical printables."),
        ],
    )
    draw_phone_mock(draw, theme, config)
    draw.text((874, 1240), "Includes QR-ready printables and deploy guidance", fill=theme["accent_alt"], font=font(FONT_SANS_BOLD, 28))
    return image


def slide_guest_actions(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "What guests can do with the template",
        "Lead with outcomes, not technology. These are the actions buyers are really offering to guests.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Get Wi-Fi fast", "Share the network, password and live Wi-Fi QR without message back-and-forth."),
            ("Handle arrival", "Surface route notes, self check-in details and building access instructions."),
            ("Find local picks", "Keep the best food, map and neighborhood shortcuts in one guest-facing page."),
            ("Reach the host", "One-tap phone or WhatsApp support without digging through chat history."),
        ],
        start_y=410,
    )
    draw_checklist(
        draw,
        theme,
        "Guest-facing promise",
        [
            "Wi-Fi access",
            "Arrival and house notes",
            "Local recommendations",
            "Maps and nearby essentials",
            "Direct host contact",
        ],
    )
    return image


def slide_whats_included(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "Everything included in the Etsy bundle",
        "Make the product feel like a full host toolkit, not just a single HTML page.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Website template", "Static guest guide homepage with cards, modals, maps and contact sections."),
            ("Customizer", "Browser editor for presets, links, Wi-Fi and printable titles."),
            ("4 presets", "Boutique, urban, coastal and blank starter versions included."),
        ],
    )
    draw_checklist(
        draw,
        theme,
        "Bundle contents",
        [
            "Guide website template",
            "No-code browser customizer",
            "Single config.json setup",
            "QR sign, Wi-Fi card and welcome sheet",
            "GitHub Pages deploy guide",
            "Buyer license for one business or one client",
        ],
    )
    return image


def slide_edit_flow(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "How easy it is to edit",
        "The listing should remove technical fear immediately: edit in browser, export one file, publish.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Choose a preset", "Start with a look that already fits your property type."),
            ("Edit content", "Replace property details, Wi-Fi, host info and guest links."),
            ("Add your live URL", "Set the public guide URL once so the QR sign points to the final page."),
        ],
    )
    draw_steps(
        draw,
        theme,
        "Simple buyer flow",
        [
            "Choose preset",
            "Edit text, links and Wi-Fi",
            "Preview guide and printables",
            "Download config.json",
            "Publish to GitHub Pages and print the QR sign",
        ],
    )
    return image


def slide_presets(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "Preset comparison",
        "Show buyers they are not starting from zero. Each preset serves a different hospitality tone.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Boutique stay", "Warm editorial tone for charming apartments and design-focused city stays."),
            ("Urban loft", "Sharper structure for self check-in, business travel and fast city stays."),
        ],
        start_y=470,
    )
    draw_preset_comparison(
        draw,
        theme,
        [
            ("Boutique", "Warm, editorial and refined", "#b86f46"),
            ("Urban", "Metropolitan, practical and clean", "#1f3c63"),
            ("Coastal", "Bright, breezy and destination-led", "#1e7474"),
            ("Blank", "Start from scratch with the same structure", "#8f5e31"),
        ],
    )
    return image


def slide_printables(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "Bonus printables that increase perceived value",
        "These extras matter on Etsy because they make the bundle feel immediately useful for real hosting.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("QR Welcome Sign", "Print a guest-facing sign for the entrance, kitchen or desk."),
            ("Wi-Fi Card", "Use the live Wi-Fi QR as a compact password card near the door."),
            ("Welcome Sheet", "Add a lightweight intro sheet with host contact and guide QR."),
        ],
        start_y=430,
    )
    draw_printable_strip(draw, theme)
    return image


def slide_after_purchase(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "How it works after purchase",
        "Spell out the post-purchase flow so buyers do not confuse the template with a hosted product.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Download ZIP", "Open the bundle and choose the preset closest to the property."),
            ("Customize", "Edit the content in the browser customizer and export config.json."),
            ("Publish", "Upload the files to GitHub Pages or another static host."),
        ],
    )
    draw_steps(
        draw,
        theme,
        "After purchase flow",
        [
            "Download the ZIP",
            "Open customize.html",
            "Edit content and public guide URL",
            "Export config.json",
            "Publish the folder",
            "Print the QR sign and share the guide with guests",
        ],
    )
    return image


def slide_delivery(theme: dict) -> Image.Image:
    image, draw = new_slide(theme)
    slide_shell(draw, theme)
    draw_header(
        draw,
        "Delivery, hosting and license",
        "This slide reduces support questions before they happen.",
        theme,
    )
    draw_feature_cards(
        draw,
        theme,
        [
            ("Digital product only", "No physical item is shipped. Buyers receive a ZIP download."),
            ("Hosting not included", "The template is self-hosted. GitHub Pages guidance is included."),
            ("One-business license", "One purchase covers one business or one client deployment."),
        ],
    )
    draw_checklist(
        draw,
        theme,
        "Important clarifications",
        [
            "Website template, not a PDF",
            "Basic edits without coding",
            "QR printables included",
            "Works best for small hosts and boutique properties",
            "Personalization can be sold separately as an add-on",
        ],
    )
    return image


def save_slide(image: Image.Image, filename: str) -> None:
    image.save(LISTING_DIR / filename)


def save_square_crop(image: Image.Image, filename: str) -> None:
    width, height = image.size
    left = (width - SQUARE_SIZE[0]) // 2
    top = max((height - SQUARE_SIZE[1]) // 2, 0)
    crop = image.crop((left, top, left + SQUARE_SIZE[0], top + SQUARE_SIZE[1]))
    crop.save(SOCIAL_DIR / filename)


def write_seller_summary() -> None:
    summary = textwrap.dedent(
        f"""
        Guest Guide Atelier seller bundle created successfully.

        Buyer ZIP:
        - {PACKAGE_ZIP.relative_to(ROOT)}

        Buyer folder:
        - {PACKAGE_DIR.relative_to(ROOT)}

        Listing slides:
        - {LISTING_DIR.relative_to(ROOT)}

        Social crops:
        - {SOCIAL_DIR.relative_to(ROOT)}

        Reminder:
        - publish a live demo before listing on Etsy
        - upload only the ZIP file as the digital download
        - keep seller-only files out of the buyer bundle
        """
    ).strip()
    (DIST / "SELLER_READY_CHECKLIST.txt").write_text(summary + "\n", encoding="utf-8")


def build_listing_assets(config: dict) -> None:
    theme = THEMES.get(config.get("themePreset"), THEMES["mediterranean"])
    slides = [
        ("01-cover.png", slide_cover(config, theme)),
        ("02-what-guests-can-do.png", slide_guest_actions(theme)),
        ("03-whats-included.png", slide_whats_included(theme)),
        ("04-how-easy-to-edit.png", slide_edit_flow(theme)),
        ("05-preset-comparison.png", slide_presets(theme)),
        ("06-bonus-printables.png", slide_printables(theme)),
        ("07-after-purchase-flow.png", slide_after_purchase(theme)),
        ("08-delivery-hosting-license.png", slide_delivery(theme)),
    ]

    for filename, image in slides:
        save_slide(image, filename)

    save_square_crop(slides[0][1], "square-cover.png")
    save_square_crop(slides[2][1], "square-whats-included.png")
    save_square_crop(slides[5][1], "square-printables.png")


def main() -> None:
    ensure_clean_dirs()
    copy_package_files()
    zip_package()
    config = load_json(ROOT / "config.json")
    build_listing_assets(config)
    write_seller_summary()
    print(f"Created {PACKAGE_ZIP.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

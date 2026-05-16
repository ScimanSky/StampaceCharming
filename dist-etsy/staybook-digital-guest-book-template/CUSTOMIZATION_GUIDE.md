# Customization Guide

StayBook is designed so a buyer only needs to edit one file through the browser customizer.

## What buyers edit

### Stay details
- property name
- badge / small label
- city
- address
- registration / CIN
- check-in window
- check-out time
- optional hero image URL

### Host contact and Wi-Fi
- host name
- phone
- email
- WhatsApp link
- Wi-Fi network
- Wi-Fi password

### 5 language tabs

Each language tab contains:
- welcome note
- house rules
- useful info
- check-in notes
- check-out notes
- local tips
- emergency / help info
- contact note

Every multiline field becomes a bullet list in the final guest book.

## How to write the text areas

Use one line per bullet.

Example:

```text
No smoking inside the apartment.
Quiet hours are from 22:00 to 08:00.
Please lock the door when you leave.
```

## Share fields

### Public guide URL
The final live URL of the published guest book.

### Guest URL override
Optional. Use this only if guests should open a different URL than the public guide.

### QR destination override
Optional. Use this only if the QR files should open a different URL than the guest link.

## Preview flow

The customizer stores the current draft in the browser and opens preview links with `?config=browser`.

That means buyers can preview the guest book and all printables before publishing.

## Export flow

When editing is complete:
1. click `Download config.json`
2. publish the template files
3. replace the root `config.json` with the downloaded one
4. confirm the live URL works
5. print the QR files

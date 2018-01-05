# A mighty fine QR Code generator

Image having a QR Code generator, which:

* does not call home
* shows no ads
* uses no tracking stuff
* needs no extra permissions
* works offline
* offers a no nonsense attitude

Sounds good?

Well, then you're in the right place.

## Main Features

This Firefox WebExtension has:

* a *simple UI*
* works *offline*
* adds a *QR Code* icon to the *toolbar*
* uses the URL of the currently *active tab* as a default input
* generates a QR Code from this *input*
* allows *easy inline editing* of the input text
* offers *multiple options* to tune your generated QR Code
* supports *UTF-8* (active by default)
* outputs QR Codes as *images*
* right-click generated QR Code images and choose *Save Image As…* to save them

## Use Cases

* Have a tab open on your desktop? Click on the extensions' icon, scan the QR Code on your mobile and visit the recognized link.
* Convert arbitrary text (phone numbers, URLs, multiline text) into a QR Code.
* Hate extensions with hidden tracking or useless features? I do! This extension is for you. Check out the source code under [popup/render.js](popup/render.js).

## What is not included?

These (optional) features were deliberately not implemented:

* Fancy colors other than black and white
* Logos or images within the QR Code
* A scanner/reader for QR Codes
* Any form of *sharing* (send by email, upload to pic-hoster, social media…)
* Context-Menu integration

## Credits

The icons are taken from the free Font Awesome 5 iconset, and used under the terms of its license (https://fontawesome.com/license), with a link back to the website: https://fontawesome.com/icons.

This extensions uses the excellent [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) library from [Kazuhiko Arase](http://www.d-project.com/).

The word "QR Code" is a registered trademark of [DENSO WAVE INCORPORATED](http://www.qrcode.com/en/faq.html).

## License

The MIT License (MIT) — [Denis Brodbeck](https://github.com/denisbrodbeck). Please have a look at the [LICENSE](LICENSE) for more details.

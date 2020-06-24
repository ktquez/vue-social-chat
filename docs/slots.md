# Slots

## header

Add content at the top of the popup

```vue
<template v-slot:header>
  <p>Click on one of our attendants below to chat on WhatsApp.</p>
</template>

```

## body

Usado para customizar o que irá aparecer no corpo da popup.

```vue
<template v-slot:body>
  your content here
</template>
```

::: tip
See custom body with [newsletter form demo](/demo/custom.html)
:::

## footer

Add content at the bottom of the popup

```vue
<template v-slot:footer>
  <small>Opening hours: 8am to 6pm</small>
</template>
```

## button

Add icons or text to the button that triggers the popup

```vue
<template v-slot:button>
  <MyWhatsAppIcon />
</template>
```

With the slot button you can also customize the text when the popup is open.

```vue
<template v-slot:button="{ open }">
  <span v-show="!open">Contact us</span>
  <span v-show="open">Close</span>
</template>
```
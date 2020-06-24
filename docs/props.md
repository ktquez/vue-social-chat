# Props

## attendents

| Type     | Required   |
| -------- | ---------- |
| Array    | `false`    | 

Array with the necessary data to create the contact list

### Properties

- **app:** String with the name of the app. (Note: Used to generate the link and icon in the avatar);
- **label:** Additional information, such as job or position.
- **name:** Name of user;
- **id (optional):** Only used to WeChat, Twitter and FB Messenger;
- **number (optional):** Only used to WhatsApp and Viber app; 
- **username (optional):** Only used to Telegram and Line;
- **href (optional):** User to custom link;
- **avatar** 
  - **src:** Path or CDN to image avatar;
  - **alt:** Alternative text to user avatar;

::: tip
Apps that VueSocialChat supports in generating links and icons:  
`whatsapp`, `telegram`, `messenger`, `wechat`, `viber` and `line`
:::

e.g.

```js
[
  {
    app: 'whatsapp',
    label: 'Technical support',
    name: 'Alan Ktquez',
    number: '5581983383532',
    avatar: {
      src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
      alt: 'Alan Ktquez avatar'
    }
  }
]
```

## icon

| Type       | default    |
| ---------- | ---------- |
| Boolean    | `false`    | 

Used to adapt the style of the button for the use of icons. (Note: If using text, you don't need to use this property)


```vue {5}
<template>
  <div class='layout'>
    <!-- ommited -->
    <SocialChat
      icon
      :attendants="attendants"
    >
      <MyWhatsAppIcon slot="button" />  
    </SocialChat>
  </div>
</template>
```

## dir

| Type       | default    |
| ---------- | ---------- |
| String     | `ltr`      |

Specifies the direction of the element's content.

- [See demo](https://vue-social-chat.surge.sh/rtl)

::: tip
See more about [Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir)
:::


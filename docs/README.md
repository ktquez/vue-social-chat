# Introduction

Vue.js component for your visitors and customers to send messages directly to you through social chats or customized form.

`vue-social-chat` allows your customers to open a conversation from your website directly to chat apps like **WhatsApp**, **Telegram**, **Messenger**, **WeChat**, **Line**, **Viber** or even the same **custom form**.

Most people use a chat app, so offering your customer a form of direct contact helps you cover visitors to customers, as well as providing you with **leads** to increase your sales or spread your content.

## Features

- Accessibility best practices;
- Supports the most used app chats;
- Flexible and customizable;
- Support text direction (ltr/rtl);
- And more;

### Donate

<br> 

<a href="https://www.buymeacoffee.com/ktquez" target="_blank" rel="noopener" aria-label="Buy Me A Coffee">
  <img src="https://cdn.buymeacoffee.com/buttons/lato-black.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important; border-radius: 10px;" >
</a>

<a href="https://ko-fi.com/O5O31PRAX" target="_blank" rel="noopener" aria-label="Support me on Ko-fi">
  <img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="Support me on Ko-fi" style="height: 51px !important;width: 217px !important;" >
</a>

::: tip
If you want a faster communication, find me on twitter [@ktquez](https://twitter.com/ktquez)
:::


## Contributing

- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes, add your name and link in the authors session CONTRIBUTING.md;
- Send a pull request;

## License

`vue-social-chat` is open-sourced package licensed under the [MIT](https://github.com/ktquez/vue-social-chat/blob/master/LICENSE) license


<SocialChat
  icon
  class="whatsapp-chat"
  :attendants="[
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
  ]"
>
  <template v-slot:header>
    <span>Click one of our representatives below to chat on WhatsApp.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
      alt="icon whatsapp"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
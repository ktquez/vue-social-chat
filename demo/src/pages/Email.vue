<template>
  <h1>Email click to chat demo</h1>
  <VueSocialChat
    icon
    class="email-chat"
    :attendants="attendants"
  >
    <template v-slot:header>
      <p>Click one of our representatives below to send Email.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/email.svg"
        alt="icon email"
        aria-hidden="true"
      >
    </template>
    <template v-slot:footer>
      <small>
        Call us to
        <a href="tel:+55988656544" title="Call us">+55 95865-6544</a>
        from 8:00hs a 18:00hs
      </small>
    </template>
  </VueSocialChat>
</template>

<script>
export default {
  name: 'EmailPage',
  setup () {
    const attendants = [
      {
        label: 'Support',
        name: 'Alan Ktquez',
        href: 'mailto:ktquez@gmail.com?subject=Testing out mailto!',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        label: 'Sales',
        name: 'Alexia Chapman',
        href: 'mailto:ktquez@gmail.com?subject=Testing out mailto!',
        avatar: {
          src: 'https://randomuser.me/api/portraits/women/63.jpg',
          alt: 'Alexia Chapman avatar'
        }
      },
      {
        label: 'Developer',
        name: 'Lucas Lima',
        href: 'mailto:lucasferreiralimax@gmail.com?subject=Testing out mailto!',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/40927839?v=4',
          alt: 'Lucas Lima avatar'
        }
      }
    ]

    return { attendants }
  }
}
</script>

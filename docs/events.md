# Events

`VueSocialChat` trigger events ($emit) when `open` and `close` popup;

e.g.

```vue {5,7,12}
<template>
  <div class='layout'>
    <!-- ommited -->
    <SocialChat
      @open="$analytics.fbq('trackCustom', 'WhatsAppChat', { event: 'Chat Open' })"
      @close="$analytics.fbq('trackCustom', 'WhatsAppChat', { event: 'Chat Close' })"
    >
      <!-- ommited -->
    </SocialChat>
  </div>
</template> 
```
<script>
  window.watsonAssistantChatOptions = {
      integrationID: "0621f580-31dc-42b6-9046-11e6aa38480c", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "5d3e4703-27c7-4c52-aa01-f999f8afeef4", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
</script>
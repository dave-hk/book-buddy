<script lang="ts">
  import { A } from "flowbite-svelte";
  import GoogleCloudLink from "./GoogleCloudLink.svelte";
</script>

<p class="font-normal text-gray-700 dark:text-gray-400">
  Powered by <A
    class="font-medium text-[#5ca828] hover:underline"
    href="https://cloud.google.com/products/agent-builder?hl=en">Vertex AI Agent Builder</A> and
  <A class="font-medium text-[#5ca828] hover:underline" href="https://cloud.google.com/products/conversational-agents?hl=en"
    >Conversational Agents</A>
  in <GoogleCloudLink />
</p>

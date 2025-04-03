<script lang="ts">
  import { Heading } from "flowbite-svelte";
  import { onMount } from "svelte";
  import DialogBox from "../components/DialogBox.svelte";
  import FloatingActionBtn from "../components/FloatingActionBtn.svelte";
  import GradientWave from "../components/GradientWave.svelte";
  import DfMessenger from "../components/DfMessenger.svelte";
  import TopNav from "../components/TopNav.svelte";
  import BottomBar from "../components/BottomBar.svelte";
  import SavedItems from "../components/SavedItems.svelte";
  import HistoryBtn from "../components/HistoryBtn.svelte";
  import { savedItemState, showSavedItems } from "../store/saved-response";
  import { dfMessengerResponseState } from "../store/dfMessenger-response";

  let showFloatingActionBtn: boolean = false;

  function sendInput(text: string, time: number) {
    const dfMessenger = document.querySelector("df-messenger");
    const dfMessengerChat = dfMessenger?.querySelector("df-messenger-chat");
    const dfMessengerUserInput =
      dfMessengerChat?.shadowRoot?.querySelector("df-messenger-user-input");
    const textarea = dfMessengerUserInput?.shadowRoot?.querySelector("textarea");
    const button = dfMessengerUserInput?.shadowRoot?.querySelector("button");

    setTimeout(function () {
      if (textarea) {
        textarea.value = text;
      }
    }, time);

    setTimeout(function () {
      if (textarea) {
        textarea.dispatchEvent(new Event("input"));
      }
    }, time + 100);

    setTimeout(function () {
      if (button) {
        button.click();
      }
    }, time + 1000);
  }

  onMount(() => {
    // Write and send sample questions to chatbot
    // sendInput("Hello", 2000);
    sendInput("有冇the Game of Thrones系列？", 1000);
    sendInput("想要第2集，有冇貨？", 6000);
    sendInput("內容大概講啲咩？", 10000);
    sendInput("Do you have any books with the Romance theme?", 16000);
    const resizeObserver = new ResizeObserver((entries) => {
      // entries[0].target.clientHeight is equal to document.body.scrollHeight
      showFloatingActionBtn = entries[0].target.clientHeight > window.innerHeight;
    });

    resizeObserver.observe(document.body);
  });
</script>

<TopNav />

<div class="container mx-auto flex flex-col items-center px-4 md:px-0">
  <div class="max-h-full w-full">
    <Heading
      tag="h1"
      class="mb-2 mt-[5vh] text-center text-3xl font-bold leading-snug md:text-4xl lg:text-5xl"
      >Discover Your Next Book, Instantly.</Heading>
    <div class="mt-[2vh] flex min-h-[55vh] flex-col gap-16 md:mt-[8vh] md:flex-row">
      <div class="w-full md:w-2/5">
        <p class="mt-5 text-center font-normal text-gray-500 dark:text-gray-400 md:text-start">
          Where AI Meets Your Next Read.
        </p>

        <Heading tag="h5" class="my-2 mt-6 text-[#5ca828]">How it works</Heading>
        <p class="mt-5 text-center font-normal md:text-start" >
          Submit a question and hear back from our AI helper. For instance:
        </p>

        <DialogBox prompt="有冇the Game of Thrones系列？" boxWidth={58} />
        <DialogBox prompt="想要第2集，有冇貨？" boxWidth={42} />
        <DialogBox prompt="內容大概講啲咩？" boxWidth={35} />
        <DialogBox prompt="Do you have any books with the Romance theme?" boxWidth={85} />
      </div>

      <div class="relative w-full md:w-3/5">
        <div class="absolute right-3 top-3 z-[1] flex items-center justify-center">
          <HistoryBtn total={$dfMessengerResponseState.entities.length} />
        </div>
        <DfMessenger />
      </div>
    </div>
  </div>

  <div class="mb-2 mt-[8vh] text-center md:text-start">
    <BottomBar />
  </div>
</div>

<GradientWave />

{#if showFloatingActionBtn}
  <div class="fixed bottom-10 right-10 hidden md:flex">
    <FloatingActionBtn />
  </div>
{/if}

{#if $savedItemState.entities.length > 0}
  {#if $showSavedItems}
    <div class="fixed bottom-24 left-24">
      <SavedItems />
    </div>
  {/if}
{/if}

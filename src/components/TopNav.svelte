<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";

  let RECOMMENDATION_URL =
    "https://www.goodreads.com/";

  let LINKEDIN_URL = "https://www.linkedin.com/in/chun-yu-tsui/";
</script>

<Navbar class="bg-gray-100">
  <NavBrand href="/">
    <span class="whitespace-nowrap text-xl font-semibold text-[#5ca828]">BookBuddy</span>
  </NavBrand>
  <NavUl nonActiveClass="text-gray-500" activeClass="text-[#5ca828]">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/history">History</NavLi>
    <NavLi href={`${RECOMMENDATION_URL}`}>Recommendation</NavLi>
    <NavLi href={`${LINKEDIN_URL}`}>About us</NavLi>
  </NavUl>
</Navbar>

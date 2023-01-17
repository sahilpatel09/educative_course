<template>
      <div class="flex justify-between container mx-auto py-3">
        <NuxtLink to="/">
            <IconsCustomName alphabet="J"/>
        </NuxtLink>
  
        <button
          type="button"
          class="toggle"
          aria-controls="menuItems"
          aria-expanded="false"
        >
          <span class="sr-only">Menu</span>
          <div class="wrapper-menu" :class="{ open: isopen }" @click="clicked">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        </button>
  
        <div class="menu">
          <input type="hidden" name="form-name" value="sellers-form" />
          <ul class="menuitems" id="menuItems" :data-visible="showHide">
            <li class="py-2.5 px-1">
                <NuxtLink href="#about" title="About me" @click="clicked">About</NuxtLink>
            </li>
            <li class="py-2.5 px-1">
              <span class="numerals">02.</span>Experience
            </li>
            <li class="py-2.5 px-1">
              <a href="#projects" title="My Projects" @click="clicked"
                >Projects</a
              >
            </li>
            <li class="py-2.5 px-1">
              <g-link to="/blog" @click="clicked">Blog</g-link>
            </li>
            <li class="py-2.5 px-1">
              <a href="#getintouch" title="Contact me" @click="clicked"
                >Contact</a
              >
            </li>
  
            <li class="">
              <a
                class="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none hover:text-white"
                href="https://drive.google.com/file/d/12IvNtpyO7xXaKlzkv66rotgJRlP1MLAe/view?usp=sharing"
                target="_blank"
                >Resume</a
              >
            </li>
          </ul>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "Bar",
    data() {
      return {
        isopen: false,
        showHid
      };
    },
    computed: {
      getScreenWidth() {
        return window.screen.width;
      },
    },
    created() {},
    methods: {
      clicked() {
        if (this.isopen === true) {
          this.isopen = false;
          this.showHide = false;
          // if (this.getScreenWidth < 769) {
          //   document.body.classList.remove("fixedBody");
          // }
        } else {
          this.isopen = true;
          this.showHide = true;
          // if (this.getScreenWidth < 769) {
          //   document.body.classList.add("fixedBody");
          // }
        }
      },
    },
  };
  </script>
  
<script setup>
const isopen = ref(false);
const showHide = ref(false);

function clicked() {
    if (this.isopen === true) {
        this.isopen = false;
        this.showHide = false;
    } else {
        this.isopen = true;
        this.showHide = true;
    }
      }

</script>

  <style lang="css" scoped>
  body {
    overflow-x: hidden;
  }
  
  .fixed {
    position: fixed;
  }
  
  button:focus {
    outline: 0;
  }
  
  :root {
    --green: rgb(100, 255, 218);
    --white: #fff;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  .menu {
    list-style-type: none;
  }
  
  .menuitems {
    font-size: 14px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
      "Lucida Console", Monaco, monospace;
    list-style-type: none;
    display: flex;
    gap: var(--flex-gap, 2rem);
    color: #8892b0;
  }
  
  .menu ul li a:hover {
    color: cyan;
    transition: all 333ms ease-in;
  }
  
  .numerals {
    color: cyan;
    padding-right: 5px;
  }
  
  .singleItem:hover {
    color: cyan;
    transition: all 1s ease;
  }
  
  .toggle {
    display: none;
  }
  
  .menuAnimation {
    transform: translateX(100%);
  }
  
  @media (max-width: 48rem) {
    .menuitems {
      position: fixed;
      inset: 0 0 0 30%;
      margin: 0;
      padding: 0;
      height: 100vh;
      z-index: 1000;
      background: #172a45;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--flex-gap, 2rem);
      transform: translateX(100%);
      transition: transform 330ms ease-in;
    }
    .menuitems[data-visible="true"] {
      transform: translateX(0%);
    }
    button:focus {
      outline: 0;
    }
  
    .toggle {
      display: block;
      position: absolute;
      background: transparent;
      border: none;
      outlline: none;
      top: 2rem;
      right: 2rem;
      z-index: 9999;
    }
  
    .wrapper-menu {
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      transition: transform 330ms ease;
      outlline: none;
      border: none;
    }
  
    .wrapper-menu.open {
      transform: rotate(-45deg);
    }
  
    .line-menu {
      background-color: cyan;
      border-radius: 5px;
      width: 100%;
      height: 6px;
    }
  
    .line-menu.half {
      width: 50%;
    }
  
    .line-menu.start {
      transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
      transform-origin: right;
    }
  
    .open .line-menu.start {
      transform: rotate(-90deg) translateX(3px);
    }
  
    .line-menu.end {
      align-self: flex-end;
      transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
      transform-origin: left;
    }
  
    .open .line-menu.end {
      transform: rotate(-90deg) translateX(-3px);
    }
  
    .menuitems {
      font-size: 16px;
    }
  
    .specialButton {
      color: rgb(100, 255, 218);
      border: 1px solid cyan;
      padding: 15px 20px;
  
      border-radius: 7px;
    }
  }
  </style>
  
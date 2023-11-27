<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps(['close', 'dark']);
const emit = defineEmits(['toggleTheme'])

const switchTheme = () => {
  emit('toggleTheme');
}
</script>
<template>
  <div :class="['shell', { 'close': close }]">
    <header>
      <div class="avator-text">
        <span class="image">
          <img src="../assets/avatar.png" alt="avator">
        </span>
        <div class="text logo-text">
          <span class="name">dhxの个人网盘</span>
          <span class="softeware">cloud</span>
        </div>
        <i class="toggle" @click="$emit('toggleMenu')">
          <Icon class="icon-font" icon="ep:arrow-right-bold" />
        </i>
      </div>
    </header>
    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <i class="icon">
            <Icon class="icon-font" icon="ep:search" />
          </i>
          <input class="w-50 m-2" placeholder="Please Input" />
        </li>
        <ul class="menu-link">
          <li class="nav-link">
            <a href="#home">
              <i class="icon">
                <Icon class="icon-font" icon="ep:house" />
              </i>
              <span class="text nac-text">主页</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#resume">
                <i class="icon">
                  <Icon class="icon-font" icon="ep:user" />
                </i>
                <span class="text nac-text">个人中心</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#log">
              <i class="icon">
                <Icon class="icon-font" icon="ep:timer" />
              </i>
              <span class="text nac-text">日志</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="icon">
                <Icon class="icon-font" icon="ep:delete" />
              </i>
              <span class="text nac-text">回收站</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="btn-content">
        <li>
          <a href="#login">
            <i class="icon">
              <Icon class="icon-font" icon="ep:switch-button" />
            </i>
            <span class="text">注销</span>
          </a>
        </li>
        <li class="mode">
          <div class="sun-moon">
            <i class="icon sun">
              <Icon class="" icon="ep:sunny" />
            </i>
            <i class="icon moon">
              <Icon class="" icon="ep:moon" />
            </i>
          </div>
          <span class="mode-text text">{{ dark ? '白日模式' : '夜间模式' }}</span>
          <div class="toggle-switch" @click="switchTheme">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shell {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background-color: var(--shell-color);
  transition: all 0.3s ease;
  z-index: 100;

  li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .image,
  .icon {
    min-width: 60px;
    border-radius: 6px;
  }

  .icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 300 23px '';
  }

  .text,
  .icon {
    color: var(--text-color);
    transition: all 0.3s ease;
  }

  .text {
    font: 500 17px;
    white-space: nowrap;
    opacity: 1;
  }

  header {
    position: relative;

    .avator-text {
      display: flex;
      align-items: center;
    }

    .image {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 45px;
        border-radius: 6px;
      }
    }

    .toggle {
      position: absolute;
      top: 50%;
      right: -25px;
      transform: translateY(-50%) rotate(180deg);
      height: 25px;
      width: 25px;
      background-color: var(--primary-color);
      color: var(--shell-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.3s ease;

      .icon-font {
        color: var(--toggle-color);
      }
    }

    .logo-text {
      font-size: 17px;
      display: flex;
      align-items: left;
      flex-direction: column;

      .softeware {
        font-size: 10px;
        width: fit-content;
      }
    }
  }

  .menu-bar {
    li.search-box {
      border-radius: 6px;
      background-color: var(--primary-color-light);
      cursor: pointer;
      transition: all 0.3s ease;

      input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        background-color: var(--primary-color-light);
        color: var(--text-color);
        border-radius: 6px;
        font-size: 17px;
        font-weight: 500px;
        transition: all 0.3s ease;
      }
    }
  }

  li a {
    list-style: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  li a:hover {
    background-color: var(--primary-color);
  }

  li a:hover .icon,
  li a:hover .text {
    color: var(--shell-color);
  }

  .menu-bar {
    height: calc(100% - 55px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .btn-content {
      .mode {
        border-radius: 6px;
        background-color: var(--primary-color-light);
        position: relative;
        transition: all 0.3s ease;

        .sun-moon {
          height: 50px;
          width: 60px;

          i {
            position: absolute;
          }

          .sun {
            opacity: 0;
          }
        }

        .toggle-switch {
          position: absolute;
          right: 0;
          height: 100%;
          min-width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;

          .switch {
            position: relative;
            height: 22px;
            width: 40px;
            border-radius: 25px;
            background-color: var(--toggle-color);

            &::before {
              content: '';
              position: absolute;
              height: 15px;
              width: 15px;
              border-radius: 50%;
              top: 50%;
              left: 5px;
              transform: translateY(-50%);
              transition: all 0.3s ease;
              background-color: var(--shell-color);
            }
          }
        }
      }
    }
  }

}

.shell.close {
  width: 88px;

  .text {
    opacity: 0;
  }

  .toggle {
    transform: translateY(-50%) rotate(0deg);
  }

  li a:hover .icon,
  li a:hover .text {
    color: #ccc;
  }
}

.dark {

  .moon {
    display: none;
  }

  i.sun {
    opacity: 1 !important;
  }

  .switch::before {
    transition: all 0.3s ease;
    left: 20px !important;
  }
}
</style>
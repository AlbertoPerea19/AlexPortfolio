<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <section id="hero" class="hero">
    <div class="hero-container container">
      <div class="row justify-content-end">
        <div class="col-6 hero-col1 ">
          <!-- Hero title -->
          <h1 class="hero-title">{{ t('heroSection.title') }}</h1>
          <!-- Hero name -->
          <p class="hero-name">{{ t('heroSection.name') }}</p>
          <!-- Hero description -->
          <p class="hero-description">{{ t('heroSection.description') }}</p>
          <!-- CTA -->
          <button class="cta">
            <span class="hover-underline-animation">{{ t('heroSection.button') }}</span>
            <svg
              viewBox="0 0 46 16"
              height="20"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
                transform="translate(30) rotate(90)"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
//Hero section
.hero {
  background-image: url('public/img/alexPerea.png');
  background-position: left;
  background-repeat: no-repeat;
  background-size: 720.9px 858.63px;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &-container {
    position: relative;
    z-index: 1;
  }
  &-col1 {
    margin-top: 20px;
    padding-right: 15px;
    margin-right: 20px;
  }
  &-title {
    font-size: 48px;
    font-weight: 350;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  &-name {
    font-size: 72px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  &-description {
    font-size: 24px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 0.5rem;
  }
}
//CTA
.cta {
  border: none;
  background: none;
  margin-top: 20px;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 24px;
  padding-right: 15px;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: #fff;
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (max-width: 1204px) {
  .hero {
    background-image: none;
    text-align: center;
    padding: 50px 0;

    &--title {
      font-size: 36px;
    }

    &-name {
      font-size: 48px;
    }

    &-description { 
      font-size: 16px;
      line-height: 1.5;
      margin-top: 20px;
      
    }
    &-col1 {
      padding: 0;
      margin: 0 auto;
      max-width: 400px;
    }
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('public/img/alexPerea.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }

  .cta span{
    padding-bottom: 0;
    letter-spacing: 0;
    font-size: 16px;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

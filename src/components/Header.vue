<script setup lang="ts">
import { useI18n } from 'vue-i18n'


const { t, locale } = useI18n()

function updateLocale(newLocale: string) {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

const savedLocale = localStorage.getItem('locale') || 'en'
locale.value = savedLocale

</script>
<template>
  <!-- ======= Header ======= -->
  <div class="container">
    <nav class="navbar navbar justify-content-between">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="/img/Logo.png" alt="logo" />
      </a>
      <!-- Switch lang -->
      <div class="switch-lang">
        <fieldset id="switch" class="radio">
          <input
            name="switch"
            id="en"
            type="radio"
            :checked="locale === 'en'"
            @click="updateLocale('en')"
          />
          <label for="en">{{ t('EN') }}</label>
          <input
            name="switch"
            id="es"
            type="radio"
            :checked="locale === 'es'"
            @click="updateLocale('es')"
          />
          <label for="es">{{ t('ES') }}</label>
          <input
            name="switch"
            id="it"
            type="radio"
            :checked="locale === 'it'"
            @click="updateLocale('it')"
          />
          <label for="it">{{ t('IT') }}</label>
        </fieldset>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">

.navbar {
}

fieldset {
  border: 0;
}

/* Hide default radio */
.radio input[type='radio'] {
  position: absolute;
  visibility: hidden;
  display: none;
  opacity: 0;
  z-index: -1;
}

/* Customizing label */
.radio label {
  position: relative;
  padding: 10px 20px 10px 25px;
  cursor: pointer;
  border-radius: 20px;
  color: #999999;
  margin: 0px 5px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
}

.radio label,
.radio label::before {
  -webkit-transition: 0.25s all ease;
  transition: 0.25s all ease;
}

.radio label::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: ' ';
  position: absolute;
  top: 30%;
  left: 0;
  width: 1em;
  height: 1em;
}

.radio input[type='radio'] + label::before {
  border-radius: 1em;
}

/* Checked toggle */
.radio input[type='radio']:checked + label {
  color: #fff;
  background: #3C3C3C;
  z-index: 1;
}

.radio input[type='radio']:checked + label {
  padding: 10px 20px 10px 20px;
}

.radio input[type='radio']:checked + label::before {
  top: 4px;
  width: 100%;
  height: 2em;
  z-index: -1;
}

.radio:hover input[type='radio']:checked + label {
  -webkit-box-shadow: #2195f338 0px 0px 0px 10px;
  box-shadow: #212121 0px 0px 0px 10px;
}
</style>

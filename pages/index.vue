<template>
  <div>
    <section id="home" class="hero is-fullheight presentation">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar" :class="{ floating: navbarFloating }">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img class="logo" src="~/assets/images/logo.jpg" alt="Logo" />
              </a>
              <span
                class="navbar-burger"
                :class="{ 'is-active': navbarOpen }"
                data-target="navbarMenuHeroC"
                @click="navbarOpen = !navbarOpen"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div
              id="navbarMenuHeroC"
              class="navbar-menu"
              :class="{ 'is-active': navbarOpen }"
            >
              <div class="navbar-end">
                <a
                  href="#home"
                  class="navbar-item"
                  @click="navbarOpen = !navbarOpen"
                >
                  Início
                </a>
                <a
                  href="#about"
                  class="navbar-item"
                  @click="navbarOpen = !navbarOpen"
                >
                  Quem somos
                </a>
                <a
                  href="#destinations"
                  class="navbar-item"
                  @click="navbarOpen = !navbarOpen"
                >
                  Viagens
                </a>
                <a
                  href="#services"
                  class="navbar-item"
                  @click="navbarOpen = !navbarOpen"
                >
                  Serviços
                </a>
                <a
                  href="#contact"
                  class="navbar-item"
                  @click="navbarOpen = !navbarOpen"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Explore.<span>Descubra</span>.Compartilhe</p>
          <p class="subtitle">
            Economize tempo e dinheiro viajando com o
            <span class="has-text-weight-semibold"
              >Clube Transfer Receptivo</span
            >
          </p>
          <a
            class="button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5571997127405&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
            Reservar
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="hero is-relative about">
      <div class="hero-body">
        <div class="container">
          <div class="box">
            <span class="title">Quem Somos</span>

            <div class="columns">
              <div class="column is-4">
                <div class="info">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="~/assets/images/quem_somos_1.jpg"
                    />
                  </figure>
                  <span class="title">Sobre o Clube Transfer Receptivo</span>
                  <p class="description">
                    O Clube Transfer Receptivo nasceu com o propósito de trazer
                    mais qualidade nas viagens do aeroporto até os hóteis e
                    eventos.
                  </p>
                  <a class="button" @click="setModal(1)">Saiba mais</a>
                </div>
              </div>
              <div class="column is-4">
                <div class="info">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="~/assets/images/quem_somos_2.jpg"
                    />
                  </figure>
                  <span class="title">Porque Viajar com o Clube Transfer</span>
                  <p class="description">
                    Acreditamos que as viagens, além de nos trazer bem-estar,
                    podem transformar nossa visão de mundo e nos tornar
                    culturalmente mais ricos.
                  </p>
                  <a class="button" @click="setModal(2)">Saiba mais</a>
                </div>
              </div>
              <div class="column is-4">
                <div class="info">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="~/assets/images/quem_somos_3.jpg"
                    />
                  </figure>
                  <span class="title">Transfer programado</span>
                  <p class="description">
                    Com o Transfer programado, nossos clientes criam um
                    compromisso com a sua qualidade de vida e contam com os
                    benefícios que só o Clube Transfer Receptivo pode oferecer.
                  </p>
                  <a class="button" @click="setModal(3)">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="destinations" class="hero destinations">
      <div class="hero-body pb-0">
        <div class="container">
          <span class="title">Viagens</span>
          <p class="description is-hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div class="columns is-multiline is-centered">
            <div class="column is-4">
              <div class="card is-relative">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="~/assets/images/destinos/sauipe.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="legend">Costa do Sauípe</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-relative">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="~/assets/images/destinos/vila_gale_mares.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="legend">Vila Galé Hoteis</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-relative">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="~/assets/images/destinos/tivoli_praia.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="legend">Tivoli Hotels & Resorts</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-relative">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="~/assets/images/destinos/iberostar.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="legend">Iberostar Hotels & Resorts</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-relative">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="~/assets/images/destinos/grand_palladium.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="legend">Grand Palladium Hotels & Resorts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="has-text-centered">
          <a
            class="button cta-button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5571997127405&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
            Reservar Agora
          </a>
        </div>
      </div>
    </section>

    <section class="hero is-medium results is-relative">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-6">
              <div class="level">
                <div class="level-item">
                  <div class="circle">
                    <font-awesome-icon :icon="['fas', 'map-marked-alt']" />
                  </div>
                  <div>
                    <p class="title">+50</p>
                    <p class="heading">Destinos</p>
                  </div>
                </div>
                <div class="level-item">
                  <div class="circle">
                    <font-awesome-icon :icon="['fas', 'car']" />
                  </div>
                  <div>
                    <p class="title">+200</p>
                    <p class="heading">Viagens</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="level">
                <div class="level-item">
                  <div class="circle">
                    <font-awesome-icon :icon="['fas', 'smile-wink']" />
                  </div>
                  <div>
                    <p class="title">+120</p>
                    <p class="heading">Clientes</p>
                  </div>
                </div>
                <div class="level-item">
                  <div class="circle">
                    <font-awesome-icon :icon="['fas', 'heart']" />
                  </div>
                  <div>
                    <p class="title">+300</p>
                    <p class="heading">Likes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services" class="hero services">
      <div class="hero-body">
        <div class="container">
          <span class="title">Serviços</span>
          <div class="columns is-multiline">
            <div class="column is-4">
              <div class="card">
                <span class="title">Transfer Receptivo</span>
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img
                      src="~/assets/images/transfer.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    Realizamos transfer para os melhores destinos da Bahia, Vila
                    Galé Mares, Tivoli Ecoresort, Praia do forte, Iberostar
                    Bahia, Iberostar Select, Grand Palladium Imbassaí, Costa do
                    Sauípe e mais uma infinididade de lugares com uma melhor
                    infraestrutura para você.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <span class="title">Transfer Receptivo</span>
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img
                      src="~/assets/images/party_day.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    Para tornar sua viagem ainda mais surpreendente temos o
                    Party Day onde te pegamos no hotel e te levamos para
                    conhecer as mais variadas opções gastronômicas e de lazer
                    que agradam a todos os gostos, desde aqueles que preferem
                    relaxar de frente ao mar até quem opta por curtir a noite e
                    aproveitar as apresentações exclusivas em Salvador.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <span class="title">City Tour</span>
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img
                      src="~/assets/images/city_tour.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    Te levamos aos pricipais pontos turistícos da Bahia onde
                    voce irá conhecer um pouco da história do Brasil, Igrejas,
                    culturas e arquitetura barroca.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <span class="title">Vale viagens</span>
                <div class="card-image">
                  <figure class="image is-128x128">
                    <img
                      src="~/assets/images/gift.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    Presenteie quem você ama com algo que será lembrado para
                    sempre. Dê um de nossos vale-presentes e deixe o presenteado
                    escolher o lugar para viajar com nossos serviços de
                    transferências.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="hero contact">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <span class="title">Contate-nos</span>
              <div class="mb-2">
                <span class="icon-text">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                  </span>
                  <span>Salvador, Bahia, Brazil</span>
                </span>
              </div>
              <div class="mb-2">
                <span class="icon-text">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  </span>
                  <span
                    ><a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=5571997127405&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
                      >(71) 99712-7405</a
                    ></span
                  >
                </span>
              </div>
              <div class="mb-2">
                <span class="icon-text">
                  <span class="icon">
                    <font-awesome-icon :icon="['far', 'paper-plane']" />
                  </span>
                  <span
                    ><a href="mailto:clubetransfersalvador@gmail.com"
                      >clubetransfersalvador@gmail.com</a
                    ></span
                  >
                </span>
              </div>
              <div class="mb-2">
                <span class="icon-text">
                  <span class="icon">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                  </span>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/clubetransfer/"
                    >
                      @clubetransfer
                    </a>
                  </span>
                </span>
              </div>
              <div class="mb-2">
                <span class="icon-text">
                  <span class="icon">
                    <font-awesome-icon :icon="['far', 'clock']" />
                  </span>
                  <span>24 Horas</span>
                </span>
              </div>
            </div>
            <div class="column is-6">
              <span class="title">Fale conosco</span>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    <InfoModal
      :openModal="openModal"
      :modalType="modalType"
      @close="openModal = !openModal"
    />

    <a
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5571997127405&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
    >
      <div class="floating-whatsapp">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
      </div>
    </a>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'

import ContactForm from '~/components/ContactForm'
import InfoModal from '~/components/InfoModal'

export default {
  components: {
    ContactForm,
    InfoModal,
  },
  setup() {
    const openModal = ref(false)
    const modalType = ref(0)

    const setModal = (e) => {
      openModal.value = true
      modalType.value = e
    }

    const navbarOpen = ref(false)

    const navbarFloating = ref(false)
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = (e) => {
      const scrollY = window.scrollY
      if (scrollY >= 1) {
        navbarFloating.value = true
      } else {
        navbarFloating.value = false
      }
    }

    return {
      openModal,
      modalType,
      setModal,
      navbarOpen,
      navbarFloating,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/index.scss';
</style>

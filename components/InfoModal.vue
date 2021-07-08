<template>
  <div class="modal" :class="{ 'is-active': openModal }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="modal-header">
        <a class="delete" @click="$emit('close')" />
      </div>
      <div class="modal-body">
        <div v-if="modalType == 1" class="content">
          <div class="block">
            <span class="title is-size-6 is-block">Nossos Motoristas</span>
            <p>
              Nossos motoristas são experientes e capacitados para que a sua
              viagem seja mas segura, além disso todos trabalham uniformizados e
              com carros novos.
            </p>

            <p>
              Ao contratar um de nossos serviços de transfer para o aeroporto,
              hotel ou city tour, você poderá contribuir para o crescimento do
              turismo local.
            </p>
          </div>

          <div class="block">
            <span class="title is-size-6 is-block">Nossos Guias</span>
            <p>
              Acreditamos que o melhor de cada lugar é sua cultura, e para
              aproveitar de maneira mais ampla, nada melhor do que pode ajudar e
              incentivar a cultura local.
            </p>

            <p>
              O <span class="has-text-weight-semibold">Guia</span> seleciona
              diversas ONGs e ações culturais para ajudar dentro de seus
              roteiros de passeios guiados. Assim além de te ajudar, ajudamos o
              próximo.
            </p>
          </div>
        </div>

        <div v-if="modalType == 2" class="content">
          <p>
            O Clube Transfer Receptivo tem uma frota de veículos capaz de
            atender todo tipo de demanda com segurança, pontualidade e
            tranquilidade para os clientes. Nossos veículos são novos, passam
            por constantes manutenções preventivas e são monitorados em tempo
            integral.
          </p>

          <p>
            Disponibilizamos uma assessoria criteriosa na hora de escolher o
            veículo que mais se encaixa para realizar uma viagem.
          </p>
        </div>

        <div v-if="modalType == 3" class="content">
          <ul>
            <li>Transfer para hotéis e pousadas</li>
            <li>Transfer para Vila Galé Marés</li>
            <li>Transfer para Tivoli Ecoresort</li>
            <li>Transfer para Praia do Forte</li>
            <li>Transfer para Iberostar Bahia</li>
            <li>Traslado para Iberostar Praia do Forte</li>
            <li>Transfer para Grand Palladium Imbassaí</li>
            <li>Transfer para Costa do Sauípe</li>
            <li>Traslado para Morro de São Paulo</li>
            <li>Traslado para Barra de Maraú</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openModal: Boolean,
    modalType: Number,
  },
  emits: ['close'],
}
</script>

<style lang="scss">
@import '@/assets/css/modal.scss';
</style>

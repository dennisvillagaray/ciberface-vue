<template>
  <article>
    <ProfileInfoItem title="Biografía">
      <p> {{ user.about }}
      </p>
    </ProfileInfoItem>

    <ProfileInfoItem title="Información">
      <TableComp :data="data" />
    </ProfileInfoItem>
  </article>
</template>
<script>
import ProfileInfoItem from "@/components/atoms/profile/ProfileInfoItem.vue";
import TableComp from '@/components/atoms/TableComp.vue';

import { mapState } from "vuex";

export default {
  name: 'ProfileInformation',
  components: {
    ProfileInfoItem,
    TableComp
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.userCurrent,
    }),
    data() {
      return [
        { label: "Nombre", value: this.user.name },
        { label: "Apellido", value: this.user.surname },
        { label: "Fecha de Nacimiento", value: this.user.birthDate },
        { label: "Género", value: this.user.gender },
        { label: "Teléfono", value: this.user.phone },
        { label: "E-mail", value: this.user.email},
      ]}
  },
}
</script>
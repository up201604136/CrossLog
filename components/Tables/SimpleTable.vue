<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Priority">{{ $prioridade }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="% conclusion">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Actions">
           <a v-if="$keycloak.tokenParsed.given_name == 'Administrador'" href=""><md-icon style="color:black">keyboard_arrow_up</md-icon></a>
           <a v-if="$keycloak.tokenParsed.given_name == 'Administrador'" href=""><md-icon style="color:black">keyboard_arrow_down</md-icon></a>
           <a href=""><md-icon style="color:black">add</md-icon></a>
           <a v-if="$keycloak.tokenParsed.given_name == 'Administrador'" href=""><md-icon style="color:red">cancel</md-icon></a>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        },
        {
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten"
        },
        {
          name: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>

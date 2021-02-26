<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>

         <div class="phone-viewport">
          
      <md-bottom-bar class="md-accent" md-sync-route>
                <div class="components">
                  <md-bottom-bar-item to="/dashboard" md-label="ID and Weight" md-icon="qr_code_scanner"></md-bottom-bar-item>
                  <md-bottom-bar-item to="/dynamic_acc" md-label="Dynamic accumulator" md-icon="dynamic_feed"></md-bottom-bar-item>
                  <md-bottom-bar-item to="/palletization" md-label="Palletization" md-icon="precision_manufacturing"></md-bottom-bar-item>
                  <md-bottom-bar-item to="/wrap" md-label="Progressive involvement" md-icon="wrap_text"></md-bottom-bar-item>
               </div>
       
      </md-bottom-bar>
    </div>
  </div>


  
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

export default {
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
<style scoped>


  .components{
    width: 100%;
        align-items: center;
    justify-content: center;
    text-align: center;
    position:relative;
    background-color: #999999;

  }
</style>
<template>
    <ValidationObserver ref="observer" v-slot="{ invalid }" >
        <b-form @submit.prevent="$emit('login')">      
          <ValidationProvider rules="required" name="nombre de usuario">
            <b-form-group 
              slot-scope="{ valid, errors }"
              label="Username">
                <b-form-input
                  type="text"
                  v-model="user.username"
                  :state="errors[0] ? false : (valid ? true : null)"
                  placeholder="Enter your username">
                </b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider rules="required|min:6" name="Contraseña" vid="password">
            <b-form-group 
              slot-scope="{ valid, errors }"
              label="Password">      
                <b-form-input
                  type="password"
                  v-model="user.password"
                  :state="errors[0] ? false : (valid ? true : null)"
                  placeholder="Enter your password">
                </b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>  

          <b-button block type="submit" variant="primary" :disabled="invalid">Log In</b-button>
        </b-form>
    </ValidationObserver>    
</template>


<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    data(){
        return {
            valid: false,            
        }
    }, 
    components: {
        ValidationObserver,
        ValidationProvider
    },     
    computed:{

    },
    methods:{
        
    },
    props:{
        user:{
            type: Object,
            required: true,        
        }
    },

}
  
</script>

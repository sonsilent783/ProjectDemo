<template>
  <form @submit.prevent="submit" >
    <label>Title</label>
    <input type="text" name="title" v-model="title"                
    />
    <label>Image</label>
    <input type="text" name="image" v-model="image" 
    />
    <button>Add Product</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: "ProductCreate",
    setup() {
       const title = ref(''); 
       const image = ref('');
       const router = useRouter();

       const submit = async () => {
           await fetch('http://localhost:3000/products', {
               method: 'POST',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   title: title.value,
                   image: image.value
                })
           });

           await router.push('/products');
       }
       
       return {title, image, submit}
    }
    
}
/*import axios from 'axios'
export default{
    mame :'ProductCreate',
    data (){
        return{
            products:[]
        }
    },
    methods:{
        async createProducts(id){
            try{
                console.log(id)
                let res = await axios
            .get('http://localhost:3000/products/${id}');
            console.log("Product created successfully");
                console.log(res)
                 this.createProducts();
            }catch(error){
                console.error("error created",error);
            }
    }
}
}*/
</script>

<style>

</style>
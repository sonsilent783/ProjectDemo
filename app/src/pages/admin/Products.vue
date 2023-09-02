<template>
<div>
    <router-link :to="{ name: 'ProductCreate'}" class="btn">Add Product</router-link>
    <table>
        <thead>
            <tr>
                <th>#idno</th>
                <th>Title</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.title}}</td>
                <td><img :src="product.image" :alt="product.title" width="90" /></td>
                <td>
                    <router-link :to="{ name: 'ProductEdit', params: { id: product.id }}" class="btn">Edit</router-link>
                    <button @click="deleteProducts(product.id)" class="btn btn-del">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
/* import {onMounted, ref} from 'vue';
 
 export default {
   name: 'Products',
   setup() {
     const products = ref([]);
 
     onMounted( async () => {
       const res = await fetch('http://localhost:3000/products');
 
       products.value = await res.json();
     })
 
     const del = async (id) => {
       await fetch(`http://localhost:3000/products/${id}`, {
         method: 'DELETE'
       })
 
       products.value = products.value.filter(p => p.id !== id);
     }
 
     return { products, del }
   }
 }*/
import axios from 'axios'
export default {
    name: 'Products',
    data() {
        return {
            products: []
        }
    },
    methods: {
        async getproducts() {
            await axios
                .get('http://localhost:3000/products')
                .then(resp => {
                    this.products = resp.data
                }).catch(err => {
                    console.log(err);
                });
        },
        async deleteProducts(id) {
            try {
                console.log(id);
                let res = await axios.delete(`http://localhost:3000/products/${id}`);
                console.log("Product deleted successfully");
                console.log(res)
                 this.getproducts();
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    },
    mounted() {
        this.getproducts()
    }
}
</script>

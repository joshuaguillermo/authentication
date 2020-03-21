<template>
  <div class="home text-center">
    <div class="jumbotron">
  <h1 class="display-3">Login</h1>
  <p class="lead">
    Login Here
    </p>
  <hr class="my-4">
  <p>
   Created by Joshua Guillermo
    </p>
  <p class="lead">
    <router-link class="btn btn-primary btn-lg"
    :to ="{name: 'signup'}"
    role="button">Sign up</router-link>
  </p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

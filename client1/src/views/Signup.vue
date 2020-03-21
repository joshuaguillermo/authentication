<template>
 <section>
  <h1>Signup</h1>
    <form>
    <div class="form-group">
        <label for="username">Username</label>
        <input
        type="text"
        class="form-control"
        id="username"
        aria-describedby="usernameHelp"
        placeholder="Enter username" required>
        <small
        id="usernameHelp"
        class="form-text text-muted">
        Username must be between 3 to 30 characters.
        Username can only contain aplhanumeric and underscores
        </small>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="passwordHelp"
            placeholder="Enter Password" required>
            <small
            id="passwordHelp"
            class="form-text text-muted">
            Password must be atleast 10.
            </small>
        </div>
            <div class="form-group col-md-6">
            <label for="confirmPassword">Confirm Password</label>
            <input
            type="password"
            class="form-control"
            id="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            placeholder="Enter Password" required>
            <small
            id="confirmPasswordHelp"
            class="form-text text-muted">
            Please confirm your password.
            </small>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
 </section>
</template>
<script>
export default {
};
</script>

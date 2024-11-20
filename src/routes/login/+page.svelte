<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import LoginForm from "./(components)/LoginForm.svelte";

    let {
        data,
    } = $props();

</script>

<Card.Root class="mx-auto max-w-sm">
    <Card.Header>
        <Card.Title class="text-2xl">Login</Card.Title>
        <Card.Description>Enter your email below to login to your account</Card.Description>
    </Card.Header>
    <Card.Content>
        <LoginForm data={data.loginForm}/>
        <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="/registration" class="underline"> Sign up </a>
        </div>
    </Card.Content>
</Card.Root>
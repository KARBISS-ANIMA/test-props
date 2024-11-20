<script lang="ts">

    import * as Form from "$lib/components/ui/form";
    import {Input} from "$lib/components/ui/input";


    import {type Infer, superForm, type SuperValidated} from "sveltekit-superforms";
    import {loginFormSchema, type LoginFormSchema} from "../schema";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {Label} from "$lib/components/ui/label";
    import {Button} from "$lib/components/ui/button";

    interface Props {
        data: SuperValidated<Infer<LoginFormSchema>>;
    }

    let {
        data,
    }: Props = $props();

    const form = superForm(data, {
        validators: zodClient(loginFormSchema),
    });

    const {form: formData, enhance, submitting} = form;

</script>

<form method="POST" use:enhance class="grid gap-2" action="?/login">
    <Form.Field {form} name="email">
        <Form.Control>
            {#snippet children({props})}
                <Form.Label>Email</Form.Label>
                <Input type="email" {...props} bind:value={$formData.email} placeholder="Your email"/>
            {/snippet}
        </Form.Control>
        <Form.FieldErrors/>
    </Form.Field>
    <Form.Field {form} name="password">
        <Form.Control>
            {#snippet children({props})}
                <Form.Label>
                    <div class="flex items-center">
                        <Label for="password">Password</Label>
                        <a href="/" class="ml-auto inline-block text-sm underline">
                            Forgot your password?
                        </a>
                    </div>
                </Form.Label>
                <Input type="password" {...props} bind:value={$formData.password} placeholder="Your password"/>
            {/snippet}
        </Form.Control>
        <Form.FieldErrors/>
    </Form.Field>
    <Form.Button type="submit" class="w-full" disabled={$submitting}>
        Login
    </Form.Button>
</form>

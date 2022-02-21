<script>
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"
    import { jsonRpcApiCall } from '../../api';
    import { apiKey } from "../../stores/User.ts";

    let username, password, account
    
    function signIn() {
      const params = {
        ac: account,
        lc: username,
        ls: password
      }
      jsonRpcApiCall("auth", "login", params).then(result => {
          result.json().then(jd => {
              try {
                  if(jd.result.code === "ok") {
                      apiKey.set(jd.result.api_key)
                  } else if (jd.result.code === "error") {
                      console.log(jd.result.message)
                  }
              } catch (e) {
                  console.log(e)
              }

          })
      });
    }

  </script>
  <div class="flex flex-col max-w-md p-8 mt-10 bg-blue-200 border-black rounded-md shadow-2xl border-1 lg:w-2/6">
    <h2 class="mb-5 text-lg font-medium text-gray-900 title-font">Sign In!!</h2>
        <Input label="Account" type="text" bind:value={account} required />
        <Input label="Username" type="text" bind:value={username} required />
        <Input label="Password" type="password" bind:value={password} required />
        <Button on:click={signIn}>Sign In</Button>
  </div>


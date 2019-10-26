import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
          <div>
            <a href='https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=840c77b5-4ad9-4731-8460-7face4acdc27&state=a39fh23hnf23&redirect_uri=http://localhost:5000/api/auth/docusign/callback'>
              <button alt='DocuSign Sign'> Sign in </button></a>
          </div>
        )
      }
}

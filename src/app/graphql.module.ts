import { NgModule } from '@angular/core'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloClientOptions } from '@apollo/client/core'

import { HttpLink } from 'apollo-angular/http'
import { cache } from './cache'

export function createApollo(): ApolloClientOptions<any> {
  return {
    cache: cache,
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

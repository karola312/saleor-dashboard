import { gql } from "@apollo/client";

export const home = gql`
  query Home(
    $channel: String!
    $hasPermissionToManageProducts: Boolean!
    $hasPermissionToManageOrders: Boolean!
  ) {
    salesToday: ordersTotal(period: TODAY, channel: $channel)
      @include(if: $hasPermissionToManageOrders) {
      gross {
        amount
        currency
      }
    }
    productsOutOfStock: products(
      filter: { stockAvailability: OUT_OF_STOCK }
      channel: $channel
    ) {
      totalCount
    }
    productTopToday: reportProductSales(
      period: TODAY
      first: 5
      channel: $channel
    ) @include(if: $hasPermissionToManageProducts) {
      edges {
        node {
          id
          revenue(period: TODAY) {
            gross {
              amount
              currency
            }
          }
          attributes {
            values {
              id
              name
            }
          }
          product {
            id
            name
            thumbnail {
              url
            }
          }
          quantityOrdered
        }
      }
    }
    activities: homepageEvents(last: 10)
      @include(if: $hasPermissionToManageOrders) {
      edges {
        node {
          amount
          composedId
          date
          email
          emailType
          id
          message
          orderNumber
          oversoldItems
          quantity
          type
          user {
            id
            email
          }
        }
      }
    }
  }
`;

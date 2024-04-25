// @ts-strict-ignore
import {
  HomeActivitiesQuery,
  HomeAnaliticsQuery,
  HomeNotificationsQuery,
  HomeTopProductsQuery,
  OrderEventsEnum,
} from "@dashboard/graphql";

export const notifications: HomeNotificationsQuery = {
  __typename: "Query",

  productsOutOfStock: {
    __typename: "ProductCountableConnection",
    totalCount: 0,
  },
};

export const activities: HomeActivitiesQuery["activities"] = {
  __typename: "OrderEventCountableConnection",
  edges: [
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-09-14T16:10:27.137126+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDoxOA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-03T13:28:46.325279+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDozNQ==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-03T13:29:01.837496+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDozNw==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.ORDER_FULLY_PAID,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-04T01:01:51.243723+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo1OA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-04T19:36:18.831561+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo2Nw==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-04T19:38:01.420365+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo2OA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-05T12:30:57.268592+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo3MQ==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-08T09:50:42.622253+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo3Mw==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-12T15:51:11.665838+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo3Nw==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: "admin@example.com",
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-12T15:51:11.665838+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo3Nw==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED_FROM_DRAFT,
        user: {
          __typename: "User",
          email: null,
          id: "VXNlcjoyMQ==",
        },
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-25T11:25:58.843860+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo3OA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-26T09:34:57.580167+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo4MA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.PLACED,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-26T09:38:02.440061+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo4Mg==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.ORDER_FULLY_PAID,
        user: null,
      },
    },
    {
      __typename: "OrderEventCountableEdge",
      node: {
        __typename: "OrderEvent",
        amount: null,
        composedId: null,
        date: "2018-10-26T09:38:02.467443+00:00",
        email: null,
        emailType: null,
        id: "T3JkZXJFdmVudDo4NA==",
        message: null,
        orderNumber: "15",
        oversoldItems: null,
        quantity: null,
        type: OrderEventsEnum.ORDER_FULLY_PAID,
        user: null,
      },
    },
  ],
};

export const topProducts: (placeholderImage: string) => HomeTopProductsQuery["productTopToday"] = (
  placeholderImage: string,
) => ({
  __typename: "ProductVariantCountableConnection",
  edges: [
    {
      __typename: "ProductVariantCountableEdge",
      node: {
        __typename: "ProductVariant",
        attributes: [
          {
            __typename: "SelectedAttribute",
            values: [
              {
                __typename: "AttributeValue",
                id: "QXR0cmlidXRlVmFsdWU6OTI=",
                name: "XL",
                sortOrder: 0,
              },
            ],
          },
        ],
        id: "UHJvZHVjdFZhcmlhbnQ6NDM=",
        product: {
          __typename: "Product",
          id: "UHJvZHVjdDo4",
          name: "Black Hoodie",
          thumbnail: {
            __typename: "Image",
            url: placeholderImage,
          },
        },
        quantityOrdered: 1,
        revenue: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 37.65,
            currency: "USD",
          },
        },
      },
    },
    {
      __typename: "ProductVariantCountableEdge",
      node: {
        __typename: "ProductVariant",
        attributes: [
          {
            __typename: "SelectedAttribute",
            values: [
              {
                __typename: "AttributeValue",
                id: "QXR0cmlidXRlVmFsdWU6OTI2=",
                name: "2l",
                sortOrder: 0,
              },
            ],
          },
        ],
        id: "UHJvZHVjdFZhcmlhbnQ6NDM=2",
        product: {
          __typename: "Product",
          id: "UHJvZHVjdDo4",
          name: "Bean Juice",
          thumbnail: {
            __typename: "Image",
            url: placeholderImage,
          },
        },
        quantityOrdered: 1,
        revenue: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 37.65,
            currency: "USD",
          },
        },
      },
    },
    {
      __typename: "ProductVariantCountableEdge",
      node: {
        __typename: "ProductVariant",
        attributes: [
          {
            __typename: "SelectedAttribute",
            values: [
              {
                __typename: "AttributeValue",
                id: "QXR0cmlidXRlVmFsdWU6OTI=3",
                name: "L",
                sortOrder: 0,
              },
            ],
          },
        ],
        id: "UHJvZHVjdFZhcmlhbnQ6NDM=3",
        product: {
          __typename: "Product",
          id: "UHJvZHVjdDo4",
          name: "Black Hoodie",
          thumbnail: {
            __typename: "Image",
            url: placeholderImage,
          },
        },
        quantityOrdered: 1,
        revenue: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 37.65,
            currency: "USD",
          },
        },
      },
    },
  ],
});

export const analitics: HomeAnaliticsQuery = {
  __typename: "Query",
  salesToday: {
    __typename: "TaxedMoney",
    gross: {
      __typename: "Money",
      amount: 57.15,
      currency: "USD",
    },
  },
};

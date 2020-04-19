import { gql } from '@apollo/client';

export const QL_QUERY_USERS = gql`
    users {
        id
        username
        firstName
        lastName
        isActive
    }
`;

export const QL_QUERY_USER = gql`
    user {
        id
        username
        firstName
        lastName
        isActive
        articleSet {
            slug
            title
            subtitle
            content
            created
            updated
            published
        }
    }
`;

export const QL_QUERY_USER_SEARCH = gql``;

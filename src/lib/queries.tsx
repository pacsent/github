import { gql } from "@apollo/client"

export const GET_ISSUES = gql`
  query GetIssues {
    repository(owner: "facebook", name: "react") {
      issues(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            id
            number
            title
            closed
            url
            createdAt
          }
        }
      }
    }
  }
`

export const GET_ISSUE = gql`
  query GetIssue($number: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        id
        title
        body
        closed
        url
      }
    }
  }
`

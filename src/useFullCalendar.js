import { useQuery, gql } from "@apollo/client";

const getEvents = gql`
  query getEvents {
    events {
      id
      start
      title
      type
      end
    }
  }
`;

export const useFullCalendar = () => {
  const { data, loading } = useQuery(getEvents);

  return [data, loading];
};

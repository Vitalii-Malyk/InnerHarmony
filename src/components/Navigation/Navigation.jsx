import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSlice";
import { List, LinkItem } from "./Navigation.styled";

export const Navigation = () => {
  const user = useSelector(selectUser);
  const ListComponent = user.currentUser ? List : "ul";

  return (
    <>
      <ListComponent loggedIn={user.currentUser}>
        <li>
          <LinkItem to="/">Home</LinkItem>
        </li>
        <li>
          <LinkItem to="/psychologists">Psychologists</LinkItem>
        </li>
        {user.currentUser && (
          <li>
            <LinkItem to="/favorites">Favorites</LinkItem>
          </li>
        )}
      </ListComponent>
    </>
  );
};

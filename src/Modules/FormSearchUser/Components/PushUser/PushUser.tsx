import MinUser from "Helpers/MinUser";
import User from "Helpers/User";
import Button from "UI/Button/Button";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";

interface Props{
  user: User;
  pushFun: (user: MinUser) => void;
}

function PushUser({ user, pushFun }: Props) {
  return (
    <div className="row">
      <UserVisitingCard user={user}></UserVisitingCard>
      <Button type="button" onClick={() => pushFun(user)}>
        Добавить
      </Button>
    </div>
  );
}

export default PushUser;

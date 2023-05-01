import MinUser from "Helpers/MinUser";
import Button from "UI/Button/Button";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";
import React from "react";

interface Props {
  user: MinUser;
  select: (id: string) => void;
  unselect: (id: string) => void;
  isSelect: boolean;
}

function PushUser({ user, select, unselect, isSelect }: Props) {
  return (
    <div className="row">
      <UserVisitingCard user={user}></UserVisitingCard>
      {isSelect && <Button type="button" onClick={() => select(user.id)}>
        Добавить
      </Button>}
      {!isSelect && <Button type="button" onClick={() => unselect(user.id)}>
        Отменить
      </Button>}
    </div>
  );
}

export default PushUser;

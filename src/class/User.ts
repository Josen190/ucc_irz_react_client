import Image from './Image';
import MyDate from './MyDate'
import API, { url_get_users_id } from "../api/Api";

interface PropsUser {
    birthday: string,
    aboutMyself: string | null,
    myDoings: string | null,
    skills: string | null,
    subscribersCount: number,
    subscriptionsCount: number,
    isSubscription: boolean,
    email: string,
    isActiveAccount: boolean,
    roles: string[],
    positions: string[],
    id: string,
    firstName: string,
    surname: string,
    patronymic: string | null,
    imageId: string | null
}

export default class User {
    birthday: MyDate;
    aboutMyself: string;
    myDoings: string;
    skills: string;
    subscribersCount: number;
    subscriptionsCount: number;
    isSubscription: boolean;
    email: string;
    isActiveAccount: boolean;
    roles: string[];
    positions: string[];
    id: string;
    firstName: string;
    surname: string;
    patronymic: string;
    image: Image;

    constructor(props?: PropsUser) {
        if (!props){
            return;
        }
        this.birthday = new MyDate(props.birthday);
        this.aboutMyself = props.aboutMyself ?? "";
        this.myDoings = props.myDoings ?? "";
        this.skills = props.skills ?? "";
        this.subscribersCount = props.subscribersCount;
        this.subscriptionsCount = props.subscriptionsCount;
        this.isSubscription = props.isSubscription;
        this.email = props.email;
        this.isActiveAccount = props.isActiveAccount;
        this.roles = props.roles;
        this.positions = props.positions;
        this.id = props.id;
        this.firstName = props.firstName;
        this.surname = props.surname;
        this.patronymic = props.patronymic ?? "";
        this.image = new Image(props.imageId ? { id: props.imageId } : null);
    }

    public static async getUser(id: string): Promise<User> {
        const info_user: PropsUser | undefined = await API.get(url_get_users_id(id)).then((response) => response.data).catch((error => undefined));

        if (!info_user) {
            return Promise.resolve(new User());
        }

        return Promise.resolve(new User(info_user));
    }

    public getFullName(): string{
        return `${this.firstName} ${this.surname} ${this.patronymic}`;
    }

}

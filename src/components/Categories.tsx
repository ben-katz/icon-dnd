import { Fragment, h } from "preact";

import categoriesData from '../data/categories'
import { CategoryInterface } from "../types";
import Category from '../components/Category'

export default function CategoryList() {
    return (
        <Fragment>
            {categoriesData.categories.map((category:CategoryInterface) => <Category key={`${category.creator}-${category.title}`} iconColor={category.iconColor} title={category.title} creator={category.creator}/>) }
        </Fragment>
    )
}
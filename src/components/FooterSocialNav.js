import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "../utils/UniversalLink"
import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"

import * as styles from "./FooterSocialNav.module.css"

const MenuLoop = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => {
        return (
          <li
            key={index}
            className={menuItem.children.length > 0 ? "has-submenu" : undefined}
          >
            <UniversalLink to={menuItem.path} activeClassName="current-page">
              {menuItem.title}
            </UniversalLink>
            {menuItem.children.length > 0 && (
              <MenuLoop menuItems={menuItem.children}></MenuLoop>
            )}
          </li>
        )
      })}
    </ul>
  )
}


const FooterSocialNav = () => {
  const wpMenu = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: {
          menu: { node: { slug: { eq: "social-menu" } } }
        }
      ) {
        nodes {
         id
          title: label
          path
          parentId
        }
      }
    }
  `)

  console.log("Raw data: ", wpMenu.allWpMenuItem.nodes)


  const headerMenu = FlatListToHierarchical(wpMenu.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "children",
    parentKey: "parentId",
  })
  console.log("headerMenu: ", headerMenu)

  return (
    <nav className={styles.footerNav}>
      {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu} ></MenuLoop> }
    </nav>
  )
}

export default FooterSocialNav
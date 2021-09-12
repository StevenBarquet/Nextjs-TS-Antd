// ---Dependencys
import { ReactElement } from 'react'
import Link from "next/link";

// ----------------------------------------COMPONENT----------------------------------------
export default function GoBack(): ReactElement {
  return(
      <section>
        <h2>
          <Link href="/">
            <a>To home...</a>
          </Link>
        </h2>
      </section>

  )
}
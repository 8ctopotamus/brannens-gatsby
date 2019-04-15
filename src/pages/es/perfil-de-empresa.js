import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import aboutUsImg from '../../images/about-us/about-us.jpg'
import storeImg1 from '../../images/about-us/store1.jpg'
import storeImg2 from '../../images/about-us/store2.jpg'

const PerfileDeEmpresa = () => (
  <Layout>
    <SEO
      title="About Brannen's Fastener, Tool, & Supply Company"
      description="Desde nuesta comienzo, hace casi seis décadas, Brennan's se ha enorgullecido de ofrecer la más alta calidad y el mejor valor a nuestros clientes."
      lang="es"
    />

    <h1>Perfil de empresa</h1>
    <div className="page-content">
      <img src={ aboutUsImg } alt="Los Brannens" style={{float: 'left', margin: '0 10px 10px 0'}} />
      <p>Desde nuestro principio casi hace seis décadas, Brannen's ha estado orgulloso de entregar la calidad más alta y mejor valor a nuestros clientes. Esta filosofía nos ha ayudado a crecer y ser un líder de la industria, distribuyendo una gran variedad de clavos y grapas, herramientas, y provisiones para la industria de construcción locales así como una variedad de fabricantes a través de Texas.</p>
      <p>Así como nuestros muchos clientes satisfechos han venido a saber, las ofertas de Brannen's no sólo ofrecen productos y servicio en el cual usted puede depender, pero también hay una asociación conveniente, con bajos precios que ayudará a su negocio a tener éxito.</p>
      <p>Esperamos que disfrute aprender más acerca de Brannen's. Los anuncios adjuntos de nuestros suministradores valorados aumentan la imagen de quien somos, y les damos gracias por su apoyo en el desarrollo de este proyecto.</p>

      <hr/>

      <h2>BRANNEN'S INC.</h2>
      <img src={ storeImg1 } alt="La tienda Brannen's" style={{float: 'right', margin: '0 0 10px 10px'}} />
      <p>Brannen's Inc. es un distribuidor principal en Texas de clavos y grapas, herramientas, y de una linea completa de productos para la industria de la construcción local así como la comunidad industrial. Nuestro servicio de la "Regla de Oro" nos ha hecho exitosos por décadas.</p>
      <p>Fred Brannen's, fue un piloto de la Fuerza aérea, y comenzó la compañía en 1947 como un almacén de surtido excesivo del ejército en San Antonio, Texas. Ya para 1952, la compañía había evolucionado en un distribuidor de surtido completo de productos locales de construcción, nuestro negocio de centro hoy. Nosotros todavía operamos en nuestra localidad original en San Antonio y hemos agregado dos tiendas adicionales en Austin y Conroe Texas.</p>
      <p>Conforme hemos expandido con el paso de los años, nosotros crecimos al punto donde necesitábamos un centro de distribución centralizado. Construimos nuestro "DC" moderno en un sitio de 13 acres en McDade, Texas, con campo de sobra para nuestro crecimiento. Muchas de nuestras funciones administrativas están centralizadas en este sitio también. Hoy la segunda generación de la familia de Brannen's corre el negocio, ayudado por miembros de la familia de la tercera generación. La "familia" de la compañía también incluye nuestros empleados y nuestros muchos leales clientes.</p>
      <p>En Brannen's, con nuestro inventario completo, nuestros precios competitivos, y marca personal de servicio nos hace el proveedor de elección para cualquiera necesidad de clavos y grapas, herramientas, y provisiones de construcción. Una vez que usted llega a ser parte de nuestra "familia", usted nunca jamás hará compras en ninguna otra parte.</p>

      <hr/>

      <h2>SERVICIO PERSONAL</h2>
      <img src={ storeImg2 } alt="La tienda Brannen's" style={{float: 'left', margin: '0 10px 10px 0'}} />
      <p>Brannen's cree en hacer negocio a la manera anticuada. Sabemos por experiencia que el servicio personal es la mejor manera de tratar a nuestros clientes. Cuando entra a una de nuestras tiendas, usted siempre será ayudado por un empleado de Brannen's bien informado y con experiencia, y que se interesa en ayudarlo a encontrar sólo el producto correcto para el trabajo, no una solución con "falta de individualidad" como los demás.</p>
      <p>Con tres generaciones de Brannen's en el liderazgo familiar asegura una continuidad de nuestra visión para el servicio de "Regla de Oro". Nosotros también tenemos viejos empleados en nuestro personal que con orgullo contribuyen con sus muchos años de experiencia, conocimiento, y comprensión del producto. Algunas de nuestras personas han estado con nosotros por más de treinta años. Todos nosotros tenemos la instrucción y la dedicación para asegurarnos de que consiga exactamente lo que usted necesita, y ser entregado cuando y donde usted lo necesita. Estamos orgullosos de encontrar soluciones económicas efectivas. Como un distribuidor principal de fabricantes de clavos y grapas, nosotros tenemos en abundancia opciones disponibles para acomodar mejor sus necesidades, y también hacemos parte de nuestro negocio ayudarlo a mantener sus proyectos que corran sin problemas.</p>

      <hr/>

      <p>Si tiene cualquier pregunta o quiere aprender más acerca de lo que Brannen's tiene que ofrecer, por favor siéntase libre de llamarnos en cualquiera de nuestras localidades.</p>
    </div>
  </Layout>
)

export default PerfileDeEmpresa

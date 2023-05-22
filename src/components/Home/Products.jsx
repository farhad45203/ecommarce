import { useEffect, useState } from "react";
import ProductsNav from "./ProductsNav";
import Link from "next/link";
import ProductsGellary from "./ProductsGellary";

const allProductGellary = [
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
  {
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
  },
];

export default function Products() {
  const [selectedNav, setSelectedNav] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [productsImages, setProductsImages] = useState([]);
  const productsPerPage = 8;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedNav === "all"
      ? products
      : products.filter((product) => product.type === selectedNav);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNavChange = (category) => {
    setSelectedNav(category);
    setCurrentPage(1);
  };

  const handleProduct = (index) => {
    setProductsImages(allProductGellary[index].images);
    setOpen(true);
  };

  return (
    <div className="bg-white" id="products">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our products
          </h2>
          <ProductsNav
            selectedNav={selectedNav}
            setSelectedNav={handleNavChange}
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
          {currentProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.type}</p>

              <a
                className="absolute z-10 right-0 bottom-1 px-4 py-1 text-white cursor-pointer bg-slate-400 rounded hover:bg-slate-600"
                onClick={() => {
                  handleProduct(index);
                }}
              >
                Gellary
              </a>
            </div>
          ))}
        </div>

        <ProductsGellary
          productsImages={productsImages}
          open={open}
          setOpen={setOpen}
        />
        {/* Pagination */}
        <ul className="pagination flex gap-3  justify-center mt-16">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={
                currentPage === index + 1
                  ? "cursor-pointer px-5 text-blue-700 font-bold"
                  : "cursor-pointer px-5"
              }
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Products() {
  const products = [
    {
      coverImage: "https://via.placeholder.com/100",
      productName: "Product A",
      type: "Game",
      price: 49.99,
      platform: "PC",
      views: 1200,
      category: "Action",
      trailer: "https://www.youtube.com/watch?v=example",
      sale: true,
      salePrice: 39.99,
      stock: 100,
      featured: false,
    },
    {
      coverImage: "https://via.placeholder.com/100",
      productName: "Product B",
      type: "Software",
      price: 29.99,
      platform: "Mac",
      views: 850,
      category: "Productivity",
      trailer: "https://www.youtube.com/watch?v=example",
      sale: false,
      salePrice: null,
      stock: 50,
      featured: true,
    },
    {
      coverImage: "https://via.placeholder.com/100",
      productName: "Product C",
      type: "Game",
      price: 59.99,
      platform: "Xbox",
      views: 2300,
      category: "Adventure",
      trailer: "https://www.youtube.com/watch?v=example",
      sale: true,
      salePrice: 49.99,
      stock: 200,
      featured: false,
    },
  ];
  const TodaysDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="bg-gray-900 flex flex-col gap-5 rounded-lg p-5 min-h-screen text-gray-300 min-w-full">
      <div className="text-4xl flex justify-center gap-20 items-center ">
        <h1>All Uploaded Products</h1>
        <Link
          className="bg-purple-900  p-2 rounded-lg hover:bg-purple-950"
          to={"/products/createProduct"}
        >
          Post New Product
        </Link>
      </div>

      {/* Displaying the fetched data */}
      <Table>
        <TableCaption>
          A list of all products as per {TodaysDate()}
        </TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-purple-900 border-b-purple-900">
            <TableHead className="w-[100px]">Cover Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Platform</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="text-right">Category</TableHead>
            <TableHead className="text-right">Trailer</TableHead>
            <TableHead className="text-right">Sale</TableHead>
            <TableHead className="text-right">SalePrice</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead className="text-right">Featured</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.productName}
              className="hover:bg-purple-600 border-b-purple-900 cursor-pointer hover:text-white"
            >
              <TableCell className="w-[100px]">
                <img
                  src={product.coverImage}
                  alt={product.productName}
                  className="w-16 h-16 object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">{product.platform}</TableCell>
              <TableCell className="text-right">{product.views}</TableCell>
              <TableCell className="text-right">{product.category}</TableCell>
              <TableCell className="text-right">
                <a
                  href={product.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Watch
                </a>
              </TableCell>
              <TableCell className="text-right">
                {product.sale ? "Yes" : "No"}
              </TableCell>
              <TableCell className="text-right">
                {product.sale ? `$${product.salePrice.toFixed(2)}` : "N/A"}
              </TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell className="text-right">
                {product.featured ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Products;

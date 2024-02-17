// type BlogCardProps = {
//   title: string;
//   description: string;
//   dateCreated: string;
// }

// BlogCard Component

const BlogCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-slate-400">
      <h2 className="text-xl font-bold mb-2">title</h2>
      <p className="text-gray-700 mb-4">description</p>
      <p className="text-gray-600 text-xs">dateCreated</p>
    </div>
  )
}

export default BlogCard;
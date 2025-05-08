import useGetData from '../../hooks/GetHooks'
import { Eye, ThumbsDown, Heart } from 'lucide-react';

function BlogCards() {
  const url = import.meta.env.VITE_API_URL
  const { data, loading, error } = useGetData(`${url}/posts`)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen px-4">
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-2">Xatolik!</h2>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="max-w-[1211px] m-auto my-[50px] max-[1270px]:mx-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.posts?.map((post) => (
        <div key={post?.id} className="bg-white rounded-2xl shadow-md border p-4 flex flex-col justify-between">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{post?.title}</h2>
            <p className="text-gray-600">{post?.body}</p>
          </div>
          <div className="flex justify-between items-center border-t pt-2 text-gray-500 text-sm">
            <div className="flex items-center space-x-1 cursor-pointer">
              <Eye size={18} />
              <span>{post?.views}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <ThumbsDown size={18} />
              <span>{post?.reactions?.dislikes}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Heart size={18} />
              <span>{post?.reactions?.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default BlogCards

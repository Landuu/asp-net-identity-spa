/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

const App = () => {
	const query = useQuery({
		queryFn: async () => (await axios.get('/api')).data,
		queryKey: ['index']
	});

	const loginMutation = useMutation({
		mutationFn: async (data: any) => (await axios.post('http://localhost:8000/login?useCookies=true&useSessionCookies=true', data, {
			withCredentials: true
		})).data,
	});

	const clickLogin = async () => {
		const d = await loginMutation.mutateAsync({
			email: "test@example.com",
			password: "pop12345"
		});
		console.log('login_data', d);
	}

	return (
		<div>
			<h1>Index</h1>
			<div>
				{query.isLoading && <p>Loading...</p>}
				{query.error && <p>QE: {query.error.message}</p>}
				{query.data && <p>{query.data}</p>}
			</div>
			<div>
				<button className="p-2 bg-yellow-200" onClick={clickLogin}>LOGIN</button>
			</div>
		</div>
	)
}

export default App

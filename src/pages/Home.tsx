import { Component, createSignal, For, lazy, Match, Switch } from 'solid-js';
import { A, HashRouter, Route, Router, useLocation, useNavigate } from '@solidjs/router';
import { restRequests, setRestRequests } from '../store/store';
import RequestModal from '../components/RequestModal';
import IconButton from '../components/IconButton';
import "./Home.css"

const RequestIndex =  lazy(() => import('./Request/Index'));
const RequestById =  lazy(() => import('./Request/[id]'));




const Home: Component = () => {
    const [showModal, setShowModal] = createSignal(false)
    const location = useLocation();
    const navigate = useNavigate()
    
    return (
        <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
            <RequestModal
                show={showModal()}
                onModalHide={(id: string | null) => {
                    setShowModal(!showModal());
                    if(id)
                        navigate(`/${id}`);
                }}
            />

            
            <div class="w-full md:w-1/4 bg-gray-200 min-h-full border-gray-300 border p-4 rounded-lg">
                <div class="flex justify-between py-4">
                <h1 class="text-sm ">Rest Requests</h1>
                <IconButton
                    onClick={() => setShowModal(true)}
                    icon="add"
                    label="Add Request"
                />
                </div>
                <div class="list">
                    <For each={restRequests()} fallback={
                        <button
                            onClick={() => setShowModal(true)}
                            class="cursor-pointer hover:bg-purple-600 hover:text-white flex justify-between gap p-2 bg-white border rounded-md items-center w-full"
                        >
                            <p class="text-center w-full">No Requests. Click to add</p>
                        </button>
                    }>
                    {(item) => (
                        <A href={`/${item.id}`} class="relative list__item">
                        <div
                            class="p-2 hover:bg-gray-300 cursor-pointer pr-12 rounded-lg mb-2"
                            classList={{
                            "list__item--active": Boolean(
                                location.pathname === `/${item.id}`
                            ),
                            }}
                        >
                            <div>{item.name}</div>
                            <div class="text-xs break-all">
                            {item.request.method} {item.request.url}
                            </div>
                        </div>
                        <ion-icon
                            onclick={(e: MouseEvent) => {
                                e.preventDefault();
                                e.stopImmediatePropagation();
                                if (restRequests()?.length) {
                                const requests = restRequests() || [];
                                setRestRequests(
                                    requests.filter((i) => i.id !== item.id)
                                );
                                if (location.pathname === `/${item.id}`) {
                                   navigate("/");
                                }
                                }
                            }}
                            class="absolute text-xl hover:scale-125 transition-all ease-in-out duration-100 hover:text-red-700 text-red-600 right-2 top-0 bottom-0 m-auto"
                            name="trash"
                        ></ion-icon>
                        </A>
                    )}
                    </For>
                </div>
            </div>
            <div class="flex-1 min-h-full">
                <Switch>
                    <Match when={location.pathname === '/'}>
                        <RequestIndex />
                    </Match>
                    <Match when={true}>
                        <RequestById />
                    </Match>
                </Switch>
                   
            </div>
        </div>
    )
}

export default Home;
"use client";

import { useEffect, useMemo, useState } from "react";
import TileCard from "@/components/TileCard";
import getData from "@/lib/getData";

const AllTilesPage = () => {
    const [search, setSearch] = useState("");
    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect instead of useState
    useEffect(() => {
        const fetchTiles = async () => {
            try {
                const data = await getData();
                setTiles(data);
            } catch (error) {
                console.error("Failed to load tiles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTiles();
    }, []);

    // // search logic (title + tags + category + style)
    // const filteredTiles = useMemo(() => {
    //     return tiles.filter((tile) => {
    //         const query = search.toLowerCase();

    //         return (
    //             tile.title?.toLowerCase().includes(query) ||
    //             tile.category?.toLowerCase().includes(query) ||
    //             tile.style?.toLowerCase().includes(query) ||
    //             tile.tags?.some((tag) =>
    //                 tag.toLowerCase().includes(query)
    //             )
    //         );
    //     });
    // }, [search, tiles]);



    // search logic (title)
    const filteredTiles = useMemo(() => {
        return tiles.filter((tile) => {
            const query = search.toLowerCase();

            return (
                tile.title?.toLowerCase().includes(query)
            );
        });
    }, [search, tiles]);

    return (
        <div className="bg-[#F5F5DC] min-h-screen">
            <section className="max-w-7xl mx-auto px-6 py-16">

                {/* Title */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-3 relative inline-block">
                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#E07A5F] rounded-full"></span>
                        All Tiles Collection
                    </h2>

                    <p className="text-sm text-[#3D2B1F]/60">
                        Explore our complete range of curated tile designs
                    </p>
                </div>

                {/* Search */}
                <div className="mb-10 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-xl px-5 py-3 rounded-xl border border-[#e5e5d8] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
                    />
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="text-center text-[#3D2B1F]/60 py-20">
                        Loading tiles...
                    </div>
                ) : (
                    <>
                        {/* Empty state */}
                        {filteredTiles.length === 0 ? (
                            <div className="text-center py-20">
                                <h3 className="text-xl font-bold text-[#3D2B1F]">
                                    No Tiles Found
                                </h3>
                                <p className="text-sm text-[#3D2B1F]/60 mt-2">
                                    Try searching with different keywords
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {filteredTiles.map((tile) => (
                                    <TileCard key={tile.id} tile={tile} />
                                ))}
                            </div>
                        )}
                    </>
                )}

            </section>
        </div>
    );
};

export default AllTilesPage;
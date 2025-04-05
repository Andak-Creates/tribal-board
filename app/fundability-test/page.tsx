import FundabilityTable from "../ui-comps/fundability-table";

export default function page() {
  return (
    <div className="p-0">
      <FundabilityTable
        sliceValue={18}
        linkValue={"/fundability-test/fundability-details"}
      />
    </div>
  );
}

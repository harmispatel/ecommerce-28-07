"use client";
import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import TableCategoryItems from "~/components/shared/tables/TableCategoryItems";
import Pagination from "~/components/elements/basic/Pagination";
import FormCreateCategory from "~/components/shared/forms/FormCreateCategory";
import FormSearchSimple from "~/components/shared/forms/FormSearchSimple";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const BannerPage = () => {
  return (
    <ContainerDefault>
      <HeaderDashboard title="Banner" description="Martfury Category Listing" />
      <section className="ps-new-item">
        <form className="ps-form ps-form--new-product" action="" method="get">
          <div className="ps-form__content">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <figure className="ps-block--form-box">
                  <figcaption>Main Banner</figcaption>
                  <div className="ps-block__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Main Banner 1 <sup>*</sup>
                          </label>
                          <div className="form-group--nest">
                            <input
                              className="form-control mb-1"
                              type="text"
                              placeholder=""
                            />
                            <button className="ps-btn ps-btn--sm">
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Product Link <sup>*</sup>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter product link..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Main Banner 2 <sup>*</sup>
                          </label>
                          <div className="form-group--nest">
                            <input
                              className="form-control mb-1"
                              type="text"
                              placeholder=""
                            />
                            <button className="ps-btn ps-btn--sm">
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Product Link <sup>*</sup>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter product link..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <figure className="ps-block--form-box">
                  <figcaption>Side Top Banner</figcaption>
                  <div className="ps-block__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Side Top Banner <sup>*</sup>
                          </label>
                          <div className="form-group--nest">
                            <input
                              className="form-control mb-1"
                              type="text"
                              placeholder=""
                            />
                            <button className="ps-btn ps-btn--sm">
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Product Link <sup>*</sup>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter product link..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Side Bottom Banner <sup>*</sup>
                          </label>
                          <div className="form-group--nest">
                            <input
                              className="form-control mb-1"
                              type="text"
                              placeholder=""
                            />
                            <button className="ps-btn ps-btn--sm">
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Product Link <sup>*</sup>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter product link..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Details Banner <sup>*</sup>
                          </label>
                          <div className="form-group--nest">
                            <input
                              className="form-control mb-1"
                              type="text"
                              placeholder=""
                            />
                            <button className="ps-btn ps-btn--sm">
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="form-group">
                          <label>
                            Product Link <sup>*</sup>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter product link..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="ps-form__bottom d-flex justify-content-center">
            <button className="ps-btn">Submit</button>
          </div>
        </form>
      </section>
    </ContainerDefault>
  );
};

export default BannerPage;
